"use client"

import { Image, Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { animate, useMotionValue } from "framer-motion"

import { motion } from "framer-motion-3d"
import { atom, useAtom } from "jotai"
import { useEffect, useRef } from "react"

export const projects = [
  {
    title: "TMEIC RAG Chatbot",
    url: "https://github.com/akshita",
    image: "projects/rag-chatbot.jpeg",
    description:
      "Enterprise RAG chatbot with Microsoft Entra ID authentication achieving 98% query resolution accuracy using Azure AI and React.js.",
    tech: ["Azure AI", "React.js", "Microsoft Entra ID", "OpenAI"]
  },
  {
    title: "Marketing Strategy Agent",
    url: "https://github.com/akshita",
    image: "projects/marwin.png",
    description:
      "Multi-agent marketing strategy platform with conversational assessment using MS AutoGen, Azure, and Neo4j.",
    tech: ["MS AutoGen", "Azure", "Neo4j", "Python", "React"]
  },
  {
    title: "PharmaGraph Insights",
    url: "https://github.com/akshita",
    image: "projects/pharmgraph.png",
    description:
      "Neo4j knowledge graph mapping drug interactions with LangGraph agents for real-time pharmaceutical risk analysis.",
    tech: ["Neo4j", "LangGraph", "Python", "Cypher"]
  },
  {
    title: "ETL Pipeline Automation",
    url: "https://github.com/akshita",
    image: "projects/etl-pipeline.jpeg",
    description:
      "End-to-end ETL pipeline with multi-agent framework reducing manual processing from hours to under 2 minutes.",
      tech: ["OpenAI Agents", "Azure", "Flask", "React.js"]
  },
  {
    title: "Patient Data Anonymization",
    url: "https://github.com/akshita",
    image: "projects/patient-data.png",
    description:
      "Data governance framework for medical screens with 95% detection accuracy using EAST and YOLO algorithms.",
      tech: ["Python", "NLP", "YOLO", "spaCy"],
  },
  {
    title: "Age Gender Emotion detection",
    url: "https://github.com/Squidumb/Age-Gender-and-Emotion-detection.git",
    image: "projects/RAGE.png",
    description: "Executed real-time gender, age and emotion detection using Keras and OpenCV libraries through webcam feed.",
     tech: ["Python", "NLP", "OpenCV", "Keras"],
  },
  {
    title: "Chatbot",
    url: "https://github.com/Squidumb/Mane-Project.git",
    image: "projects/chatbot.png",
    description: "Learn how to bake a 3D model with Blender and use it in r3f",
    tech: ["React", "JavaScript", "Blender", "CSS"],
  },
]

const Project = (props) => {
  const { project, highlighted } = props

  const background = useRef()
  const bgOpacity = useMotionValue(0.4)

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4)
  }, [highlighted])

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get()
  })

  return (
    <group {...props}>
      <mesh position-z={-0.001} onClick={() => window.open(project.url, "_blank")} ref={background}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.4} />
      </mesh>
      <Image scale={[5.8, 4, 1]} url={project.image} toneMapped={false} position-y={0.8} />
      <Text maxWidth={6} anchorX={"left"} anchorY={"top"} fontSize={0.4} position={[-2.8, -1.4, 0]} color="#ffffff">
        {project.title.toUpperCase()}
      </Text>
      <Text maxWidth={5} anchorX="left" anchorY="top" fontSize={0.2} position={[-2.8, -2, 0]} color="#f1f5f9">
        {project.description}
      </Text>
      <Text maxWidth={5} anchorX="left" anchorY="top" fontSize={0.2} position={[-2.8, -2.8, 0]} color="#ffffff">
        {project.tech.join(" • ")}
      </Text>
    </group>
  )
}

export const currentProjectAtom = atom(Math.floor(projects.length / 2))

export const Projects = () => {
  const { viewport } = useThree()
  const [currentProject] = useAtom(currentProjectAtom)

  return (
    <group position-y={-viewport.height * 2 + 3}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 10, 0, -5]}
          animate={{
            x: 0 + (index - currentProject) * 8,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
        
      ))}
      
    </group>
  )
}
