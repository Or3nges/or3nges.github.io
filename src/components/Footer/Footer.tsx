import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-primary text-textSecondary py-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a 
          href="https://github.com/Or3nges" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`
            hover:text-accent 
            transition-colors
          `}
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/pratiklohani" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`
            hover:text-accent 
            transition-colors
          `}
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="font-mono text-sm">Designed & Built by Pratik Lohani</p>
    </div>
  );
};

export default Footer;
