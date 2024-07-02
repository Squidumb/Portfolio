import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Age Gender Emotion detection",
    url: "https://github.com/Squidumb/Age-Gender-and-Emotion-detection.git",
    image: "projects/RAGE.png",
    description: "Executed real-time gender, age and emotion detection using Keras and OpenCV libraries through webcam feed."
  },
  {
    title: "Chatbot",
    url: "https://github.com/Squidumb/Mane-Project.git",
    image: "projects/chatbot.png",
    description: "Learn how to bake a 3D model with Blender and use it in r3f",
  },
  {
    title: "3D Avatar",
    url: "https://www.youtube.com/watch?v=pGMKIyALcK0",
    image: "projects/AvatarLogo.png",
    description: "Created a 3D avatr using Readyplayerme",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[5.8, 4, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.8}
      />
      <Text
        maxWidth={6}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.4}
        position={[-2.5, -1.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={5}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-2.5, -2.3, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
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
  );
};