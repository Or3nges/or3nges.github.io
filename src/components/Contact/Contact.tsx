import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="w-full py-16 bg-primary flex justify-center items-center p-4">
      <motion.form 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        method="POST" 
        action="https://getform.io/f/bllqokqb" 
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p 
            className={`
              text-4xl 
              font-bold 
              inline 
              border-b-4 
              border-accent 
              text-textPrimary
            `}
          >
            Contact
          </p>
          <p className="text-textSecondary py-4">
            // Submit the form below or shoot me an email - <a href="mailto:pratik@outlook.be" className="text-accent hover:underline">pratik@outlook.be</a>
          </p>
        </div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input 
          className={`
            bg-[#ccd6f6] 
            p-2 
            rounded-sm 
            text-primary
          `} 
          type="text" 
          placeholder="Name" 
          name="name" 
          id="name" 
          aria-label="Name" 
        />
        
        <label htmlFor="email" className="sr-only">Email</label>
        <input 
          className={`
            my-4 
            p-2 
            bg-[#ccd6f6] 
            rounded-sm 
            text-primary
          `} 
          type="email" 
          placeholder="Email" 
          name="email" 
          id="email" 
          aria-label="Email" 
        />
        
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea 
          className={`
            bg-[#ccd6f6] 
            p-2 
            rounded-sm 
            text-primary
          `} 
          name="message" 
          id="message" 
          rows={10} 
          placeholder="Message" 
          aria-label="Message"
        ></textarea>
        
        <button 
          className={`
            text-textPrimary 
            border-2 
            border-textPrimary 
            hover:bg-accent 
            hover:border-accent 
            hover:text-primary 
            px-4 
            py-3 
            my-8 
            mx-auto 
            flex 
            items-center 
            transition-all 
            duration-300
          `}
        >
          Let's Collaborate
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
