import React from 'react';
import { motion } from "framer-motion";
import '../styles/styles.css';

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="relative h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center text-neon-orange"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

const skills = [
  { title: "Python", level: 60 },
  { title: "Data Analysis", level: 70 },
  { title: "Machine Learning", level: 80 },
  { title: "HTML + CSS", level: 90 },
  { title: "Problem Solving", level: 75 },
];

const Skills = () => {
  return (
    <Section>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        className="relative flex flex-row w-full space-x-4"
      >
        <div className="relative flex flex-col p-8 bg-[#001f3f] rounded-lg border-2 border-[#001f3f] text-white w-1/3">
          <div className="flex items-center space-x-4 absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img src={"assets/AvatarLogo.png"} className="w-30 h-30" />
            <div>
              <h2 className="text-4xl font-bold text-[#8ecae6]">Akshita</h2>
              <p className="text-lg">Age: 21</p>
              <p className="text-lg">From: India</p>
            </div>
          </div>

          <div className="mt-8 pt-8">
            <h3 className="text-2xl font-bold text-[#ffb703] mb-4">Experience</h3>
            <p className="text-lg">Here you can add details about your experience...</p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#ffb703] mb-4">About</h3>
            <p className="text-lg">At the age of 15, David first came in touch with UX Design and app development.</p>
          </div>
        </div>
        
        <div className="flex flex-col w-2/3 p-8 space-y-8">
          <h3 className="text-2xl font-bold text-[#ffb703] mb-4">Skills</h3>
          {skills.map((skill, index) => (
            <div className="w-full mb-4" key={index}>
              <h4 className="text-xl font-bold text-[#001f3f]">{skill.title}</h4>
              <div className="h-2 w-1/4 bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-2 w-full bg-[#ffb703] rounded-full mt-2"
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 0.5, transition: { duration: 1, delay: 1 + index * 0.2 } }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
