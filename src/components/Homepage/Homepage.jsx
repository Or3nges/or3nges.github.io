import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Homepage = () => {
  return (
    <div id="home" className="w-full h-screen bg-primary">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono"
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`
            text-4xl 
            sm:text-7xl 
            font-bold 
            text-textPrimary
          `}
        >
          Pratik Lohani
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`
            text-4xl 
            sm:text-7xl 
            font-bold 
            text-textSecondary
          `}
        >
          Applied Computer Science Student.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-textSecondary py-4 max-w-[700px]"
        >
          I'm a full-stack developer passionate about building accessible, pixel-perfect, and performant web experiences. 
          Currently seeking a <b>Software Engineering Internship</b> from Feb 2026 to May 2026.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#portfolio" 
            className={`
              group 
              text-textPrimary 
              border-2 
              border-textPrimary 
              px-6 
              py-3 
              my-2 
              flex 
              items-center 
              hover:bg-accent 
              hover:border-accent 
              hover:text-primary 
              w-fit 
              transition-all 
              duration-300
            `}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
