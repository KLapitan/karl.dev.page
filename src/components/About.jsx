import { useState } from 'react';
import karlLogo from '../assets/Karl-picture.jpg';
import { motion } from "motion/react"


const About = ({ name, JobTitle, introduction, TechnologyStack }) => {

  const [showTech ,setShowTech] = useState(false)

  return (
    // creates a boundry that centers the content and limits the width of the content
    <div className="bg-wheatBg max-w-screen-lg mx-auto px-4 py-10">
      
      {/* Name, Intro & Image */}
      <div className="bg-wheatBg flex flex-col md:flex-row items-center md:items-start">
        
        {/* Left Section: Name & Intro */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
        className="md:w-1/2 text-center mt-20 md:text-left">
          <h2 className="text-3xl md:text-xl font-bold">{name}</h2>
          <p className="text-xl font-light">{JobTitle}</p>
          <p  className="mt-4 text-gray-700">{introduction}</p>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 1, bounce: 0.6 },
              
            }}
        className=" md:w-1/2  flex justify-start md:justify-center  md:mt-0 ">
          <div className=" border w-80 h-84 mt-10 rounded-2xl flex items-center justify-center">
            <img 
              className='w-80 h-84 fit-cover rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out' 
            src={karlLogo} alt="karl" />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
        <h3>My Tech Stack :</h3>
        {TechnologyStack.map((tech, index) => (
          <motion.a
              whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} 
            key={index}
            href={tech.techUrl}
            className="text-lg  hover:text-cyan-500  hover:underline "
          >
            {tech.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default About;
