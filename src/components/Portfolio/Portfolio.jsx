import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import { projects } from '../../data/data';

const Portfolio = () => {
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
              className={`
                bg-secondary 
                p-6 
                rounded-md 
                shadow-lg 
                hover:-translate-y-2 
                transition-transform 
                duration-300
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
                    className="text-textPrimary hover:text-accent transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  {/* <a 
                    href={item.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} live demo`}
                    className="text-textPrimary hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a> */}
                </div>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">{item.title}</h3>
              <p className="text-textSecondary mb-4 text-sm">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tech.map((tech, index) => (
                  <span key={index} className="text-xs font-mono text-accent">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
