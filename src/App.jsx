import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu" 
import { Cursor } from "./components/Cursor";
import { LoadingScreen}  from "./components/LoadingScreen";
import './styles/styles.css';
import { framerMotionConfig } from "./config";
import { Analytics } from "@vercel/analytics/react"
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <ErrorBoundary>
    <Analytics />
    <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 55 }}>
          <color attach="background" args={["#a2d2ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface/>
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor/>
         </MotionConfig>
         <Leva hidden />
    </ErrorBoundary>
  );
}

export default App;