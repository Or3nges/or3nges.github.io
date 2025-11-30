import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="w-full py-16 bg-primary text-textPrimary">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`
                text-4xl 
                font-bold 
                inline 
                border-b-4 
                border-accent
              `}
            >
              About
            </motion.p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`
                sm:text-right 
                text-4xl 
                font-bold
              `}
            >
              <p>Hi. I'm Pratik, nice to meet you. Please take a look around.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-textSecondary">
                I am a student at <b>Howest</b> pursuing a Bachelor's in <b>Applied Computer Science</b> (expected graduation June 2026). 
                I have a strong foundation in software engineering principles, with hands-on experience in full-stack development, 
                cloud infrastructure, and microservices.
              </p>  
              
              <div className="mt-6">
                <h3 className="text-accent font-mono mb-4 text-lg">Technical Skills</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-textSecondary">
                  <div>
                    <h4 className="text-textPrimary font-bold mb-2 border-b border-tertiary inline-block">Languages</h4>
                    <ul className="space-y-1 mt-2">
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> JavaScript / TypeScript (Strong)</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> Java (Strong)</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> SQL (Strong)</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> C# / .NET (Good)</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> Python (Good)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-textPrimary font-bold mb-2 border-b border-tertiary inline-block">Frameworks & Tools</h4>
                    <ul className="space-y-1 mt-2">
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> Vue.js / React</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> Docker / Kubernetes</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> Terraform / Azure</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> Git / CI/CD</li>
                      <li className="flex items-center"><span className="text-accent mr-2">▹</span> MongoDB / PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                 <h3 className="text-accent font-mono mb-2 text-lg">Languages</h3>
                 <p className="text-textSecondary text-sm">
                   English (Fluent) • Dutch (Fluent) • French (Good) • Nepali (Good)
                 </p>
              </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
