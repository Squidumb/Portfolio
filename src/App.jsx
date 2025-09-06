"use client"

import { Scroll, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import emailjs from '@emailjs/browser';
import { MotionConfig } from "framer-motion"
import { Leva } from "leva"
import { useEffect, useState } from "react"
import { Experience } from "./components/Experience"
import { Interface } from "./components/Interface"
import { ScrollManager } from "./components/ScrollManager"
import { Menu } from "./components/Menu"
import { Cursor } from "./components/Cursor"
import { LoadingScreen } from "./components/LoadingScreen"
import "./styles/styles.css"
import { framerMotionConfig } from "./config"
import ErrorBoundary from "./components/ErrorBoundary"
emailjs.init("service_w4d3v8c");

function App() {
  const [section, setSection] = useState(0)
  const [started, setStarted] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  return (
    <ErrorBoundary>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#a2d2ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas>
        
        <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </ErrorBoundary>
  )
}

export default App
