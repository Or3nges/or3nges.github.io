import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogs, Blog as BlogType } from "../../data/data";
import { FaTimes } from "react-icons/fa";

const extractImageUrls = (html: string): string[] => {
  const imgRegex = /src="([^"]+)"/g;
  const urls: string[] = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    urls.push(match[1]);
  }
  return urls;
};

const preloadImages = (urls: string[]): void => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const BLOGS_PER_PAGE = 6;

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<"Tech & Meet" | "Personal" | null>(null);

  useEffect(() => {
    blogs.forEach((blog) => {
      const imageUrls = extractImageUrls(blog.content);
      preloadImages(imageUrls);
    });
  }, []);

  //Filter
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <section
      id="blog"
      className="min-h-screen flex flex-col justify-center items-center bg-bgPrimary text-textPrimary px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="text-accent">Blog</span> & Thoughts
        </motion.h2>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? "bg-accent text-primary"
                : "bg-bgSecondary text-textSecondary hover:text-accent hover:border-accent border border-transparent"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("Tech & Meet")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "Tech & Meet"
                ? "bg-accent text-primary"
                : "bg-bgSecondary text-textSecondary hover:text-accent hover:border-accent border border-transparent"
            }`}
          >
            Tech & Meet
          </button>
          <button
            onClick={() => setSelectedCategory("Personal")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "Personal"
                ? "bg-accent text-primary"
                : "bg-bgSecondary text-textSecondary hover:text-accent hover:border-accent border border-transparent"
            }`}
          >
            Personal
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ amount: 0.2 }}
              onClick={() => setSelectedBlog(blog)}
              className="bg-bgSecondary p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transition-colors duration-300 cursor-pointer border border-transparent hover:border-accent group h-full flex flex-col"
            >
              <div className="flex justify-between items-center mb-4 text-sm text-textSecondary">
                <span>{blog.date}</span>
                <div className="flex gap-2">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-bgPrimary px-2 py-1 rounded text-xs text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {blog.title}
              </h3>
              
              <p className="text-textSecondary mb-4 line-clamp-3 flex-grow">
                {blog.summary}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-700">
                <span className="text-accent text-sm font-medium group-hover:underline">
                  Read more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/*pagination*/}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === page
                    ? "bg-accent text-primary"
                    : "bg-bgSecondary text-textSecondary hover:bg-accent/20 hover:text-accent"
                }`}
              >
                {page}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/*blog card*/}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bgSecondary w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative border border-gray-700"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 p-2 bg-bgPrimary rounded-full hover:bg-accent hover:text-bgPrimary transition-colors z-10"
              >
                <FaTimes size={20} />
              </button>

              <div className="p-8 md:p-10">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedBlog.tags.map((tag) => (
                      <span key={tag} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-textPrimary">
                    {selectedBlog.title}
                  </h2>
                  <p className="text-textSecondary">{selectedBlog.date}</p>
                </div>

                <div 
                  className="prose prose-invert max-w-none text-textSecondary leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
