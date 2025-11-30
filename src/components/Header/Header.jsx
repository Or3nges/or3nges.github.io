import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../../data/data';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed 
        w-full 
        h-[80px] 
        flex 
        justify-between 
        items-center 
        px-4 
        text-textPrimary 
        z-50 
        transition-all 
        duration-300 
        ${scrolled ? 'bg-primary/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}
      `}
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-3xl font-bold font-mono text-accent cursor-pointer">PL.</h1>
      </motion.div>

      {/*desktop*/}
      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <motion.li 
            key={id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.1, duration: 0.5 }}
            className={`
              px-4 
              cursor-pointer 
              capitalize 
              font-medium 
              text-textSecondary 
              hover:text-accent 
              transition-colors 
              duration-300
            `}
          >
            <a href={`#${link}`}>{link}</a>
          </motion.li>
        ))}
      </ul>

      {/* menu icon*/}
      <div 
        onClick={handleClick} 
        className={`
          md:hidden 
          z-10 
          cursor-pointer 
          text-textPrimary 
          hover:text-accent 
          transition-colors
        `}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/*mobile */}
      {nav && (
        <ul 
          className={`
            flex 
            flex-col 
            justify-center 
            items-center 
            absolute 
            top-0 
            left-0 
            w-full 
            h-screen 
            bg-primary 
            text-textPrimary
          `}
        >
          {navLinks.map(({ id, link }) => (
            <li 
              key={id} 
              className={`
                px-4 
                cursor-pointer 
                capitalize 
                py-6 
                text-4xl 
                hover:text-accent 
                transition-colors
              `}
            >
              <a onClick={() => setNav(false)} href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
