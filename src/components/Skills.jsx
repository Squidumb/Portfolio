import React from 'react';
import { motion } from "framer-motion";
import avatarLogo from '../assets/avatarLogo.png';
import styles from '../styles/styles.css?inline';

const Section = (props) => {
    const { children } = props;
  
    return (
      <motion.section
        className="relative h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-cente text-neon-orange"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
        viewport={{ once: true }}
      >
        {children}
      </motion.section>
    );
  };
  const skills = [
    {
      title: "Python",
      level: 90,
    },
    {
      title: "Machine Learning",
      level: 90,
    },
    {
      title: "SQL",
      level: 90,
    },
    {
      title: "React",
      level: 60,
    },
    {
      title: "3D Modeling",
      level: 40,
    },
  ];

  const Skills = () => {
    return (
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
          <div className={`flex items-start justify-between w-full p-8 bg-transparent rounded-lg border-2 ${styles.borderNeonOrange} relative`}>
            <div className="flex flex-col w-2/3 space-y-8">
              <div className="flex items-center space-x-4">
                <img src={avatarLogo} alt="Avatar Logo" className="w-16 h-16" />
                <h2 className={`text-5xl font-bold ${styles.textNeonOrange}`}>Experience</h2>
              </div>
              <div>
                <p className="text-xl text-white">Here you can add details about your experience...</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3 p-4 bg-black border-l-2 border-neon-orange">
              <h3 className="text-2xl font-bold text-neon-orange">Skills</h3>
              <div className="mt-4 space-y-4">
                {skills.map((skill, index) => (
                  <div className="w-full" key={index}>
                    <h4 className="text-xl font-bold text-neon-orange">{skill.title}</h4>
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                      <motion.div
                        className="h-full bg-neon-orange rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1, transition: { duration: 1, delay: 1 + index * 0.2 } }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 border-2 border-neon-orange pointer-events-none animate-pulse" />
        </motion.div>
      </Section>
    );
  };

  export default Skills;