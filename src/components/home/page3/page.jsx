import React from "react";
import "../style.css"; 
import { motion } from 'framer-motion';

const Page3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }, 
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants} 
      id="page3"
    >
      <div id="page3-title">
        <h2>Level up</h2>
        <div className="underline"></div>
      </div>
      <div id="page3-container">
        <div className="container">
          <motion.div id="part1" variants={childVariants}>
            <img
              className="image"
              src="https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg"
              alt="Web Development"
            />
            <div>
              <a href="http://localhost:8501">
                <div className="title">Web Development</div>
              </a>
              <div className="about">
                Web development involves building websites and web applications
                using technologies like HTML, CSS, and JavaScript. It includes
                both front-end (design and user interaction) and back-end
                (server and database) development.
              </div>
            </div>
          </motion.div>
          <motion.div id="part2" variants={childVariants}>
            <img
              className="image"
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/10/full/1704901824-8672.jpg?im=FitAndFill=(826,465)"
              alt="Cyber Security"
            />
            <div>
              <a href="http://localhost:8501">
                <div className="title">Cyber Security</div>
              </a>
              <div className="about">
                Cybersecurity protects systems, networks, and data from digital
                threats. It ensures the security and privacy of information
                through tools like encryption and firewalls.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page3;
