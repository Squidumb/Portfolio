import React from 'react';
import { motion } from "framer-motion";
import '../styles/styles.css';

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="relative h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

const skillCategories = [
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "Deep Learning", level: 90, icon: "🧠" },
      { name: "Natural Language Processing", level: 88, icon: "📝" },
      { name: "Computer Vision", level: 85, icon: "👁️" },
      { name: "LangGraph & Agentic AI", level: 92, icon: "🔄" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Azure AI Services", level: 92, icon: "⚡" },
      { name: "Docker & Containers", level: 85, icon: "🐳" },
      { name: "CI/CD Pipelines", level: 80, icon: "⚙️" },
      { name: "MLOps", level: 88, icon: "🔄" }
    ]
  },
  {
    category: "Development",
    icon: "💻",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "React.js", level: 88, icon: "⚛️" },
      { name: "Neo4j & Graph DBs", level: 85, icon: "🔋" },
      { name: "REST APIs", level: 90, icon: "🔌" }
    ]
  }
];

const SkillCard = ({ category, skills, icon, color }) => (
  <motion.div
    className={`bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all`}
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-2xl`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{category}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          className="relative"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{skill.icon}</span>
              <span className="text-white/90">{skill.name}</span>
            </div>
            <span className="text-white/60 text-sm">{skill.level}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${color}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <Section>
      <div className="w-full">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Specialized in AI/ML development with extensive experience in building production-ready systems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} {...category} />
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm">
            And many more technologies in my toolkit...
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;