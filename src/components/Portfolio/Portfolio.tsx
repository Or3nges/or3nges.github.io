import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, /*FaExternalLinkAlt,*/ FaFolder, FaTimes } from 'react-icons/fa';
import { projects, Project } from '../../data/data';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="portfolio" className="w-full py-16 text-textPrimary bg-primary">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <motion.p  
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`
              text-4xl 
              font-bold 
              inline 
              border-b-4 
              text-textPrimary 
              border-accent
            `}
          >
            Work
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-6 text-textSecondary"
          >
            // Check out some of my recent work
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              onClick={() => setSelectedProject(item)}
              className={`
                bg-secondary 
                p-6 
                rounded-md 
                shadow-lg 
                hover:-translate-y-2 
                transition-transform 
                duration-300
                cursor-pointer
                group
              `}
            >
              <div className="flex justify-between items-center mb-4">
                <FaFolder className="text-4xl text-accent" />
                <div className="flex space-x-4">
                  <a 
                    href={item.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-textPrimary hover:text-accent transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  {/* <a 
                    href={item.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} live demo`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-textPrimary hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a> */}
                </div>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-textSecondary mb-4 text-sm line-clamp-3">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tech.map((tech, index) => (
                  <span key={index} className="text-xs font-mono text-accent">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* project card */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-secondary w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative border border-gray-700"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-primary rounded-full hover:bg-accent hover:text-primary transition-colors z-10"
              >
                <FaTimes size={20} />
              </button>

              <div className="p-8 md:p-10">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-textPrimary">
                    {selectedProject.title}
                  </h2>
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
                    >
                      <FaGithub size={20} /> View Code
                    </a>
                    {/* <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt size={20} /> Live Demo
                    </a> */}
                  </div>
                </div>

                <div 
                  className="prose prose-invert max-w-none text-textSecondary leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedProject.content || `<p>${selectedProject.description}</p>` }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
