import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <div id="blog" className="w-full py-16 bg-primary text-textPrimary">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">Blog</p>
          <p className="py-6 text-textSecondary">// Events</p>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <h3 className="text-2xl text-textSecondary">Coming Soon...</h3>
          <p className="mt-4 text-textSecondary">I'm currently working on some exciting articles. Stay tuned!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
