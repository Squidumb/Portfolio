import { motion } from "framer-motion"
import { useState } from "react"
import { useAtom } from "jotai" // Add this import
import { currentProjectAtom, projects } from "./Projects";
import Skills from './Skills';
import emailjs from '@emailjs/browser';
emailjs.init("xUbv3J28-alE1PAz4");

const Section = (props) => {
  const { children, mobileTop } = props

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start
        ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  )
}

export const Interface = (props) => {
  const { setSection } = props
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

// Update the handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const templateParams = {
      from_name: formData.name,
      email: formData.email,  
      message: formData.message,
      to_name: "Akshita",       
      to_email: "akrai3411@gmail.com" 
    };

    const result = await emailjs.send(
      'service_w4d3v8c',        
      'template_u21zuuj',       
      templateParams,
      'xUbv3J28-alE1PAz4'         
    );

    if (result.status === 200) {
      setSubmitStatus("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    setSubmitStatus("Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="flex flex-col items-center w-screen">
      {/* HOME SECTION */}
      <Section mobileTop>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-foreground leading-snug mt-8 md:mt-0"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I'm
          <br />
          <span className="ai-gradient-text">Akshita Rai</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground mt-4 max-w-lg"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          AI Engineer specializing in production-ready AI systems, agentic pipelines, and intelligent automation using
          LangGraph, AutoGen, and Azure AI. Scroll down to know more or directly jump to my resume. 
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1zzzq2KMv3ikzspktmWheE5ZHBIJ0gZh4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-blue-900 text-slate-50 px-8 py-4 rounded-lg font-medium mt-8 ai-glow transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          View Resume Instead
        </motion.a>
      </Section>

      {/* SKILLS SECTION */}
<Skills />

      <Section>
        <motion.div className="flex w-full gap-8 items-center justify-center flex-col">
      <div className="flex w-full h-full gap-12 items-center justify-center mt-96">
        <button
          className="w-40 h-10 bg-white/10 rounded-xl hover:text-indigo-600 text-slate-50 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-slate-50 text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="w-40 h-10 bg-white/10 rounded-xl hover:text-indigo-600 text-slate-50 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
       </motion.div>
    </Section>


      {/* CONTACT SECTION */}
      <Section>
        <motion.div className="flex w-full gap-8 items-center justify-center flex-col lg:flex-row">
          <div className="flex-1 lg:flex-none">
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Let's Work
              <br />
              <span className="ai-gradient-text">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-lg">
              Ready to transform your business with cutting-edge AI solutions? Let's discuss how we can leverage
              generative AI to solve your challenges.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <span className="text-foreground">akshita.002rai@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📱</span>
                </div>
                <span className="text-foreground">+91 9179891160</span>
              </div>
                          <div className="flex gap-4 z-50">
        <motion.a
          href="https://github.com/Squidumb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/akshitaaa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </motion.a>
      </div>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-blue-900 disabled:bg-primary/50 text-slate-50 px-6 py-3 rounded-lg font-medium ai-glow transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-secondary text-sm text-center"
                >
                  {submitStatus}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </Section>

            <div className="fixed top-8 left-10 flex gap-4 z-50">
        <motion.a
          href="https://github.com/Squidumb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/akshitaaa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  )
}
