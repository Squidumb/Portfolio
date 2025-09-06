import { Sphere, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export const Background = () => {
  const material = useRef()
  const color = useRef({
    color: "#0ea5e9",
  })
  const data = useScroll()

  const tl = useRef()

  useFrame(() => {
    tl.current.progress(data.scroll.current)
    material.current.color = new THREE.Color(color.current.color)
  })

  useEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(color.current, {
      color: "#0f172a", // Dark blue
    })
    tl.current.to(color.current, {
      color: "#1e293b", // Slate
    })
    tl.current.to(color.current, {
      color: "#22c55e", // Neon green
    })
  }, [])

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={false} />
      </Sphere>
    </group>
  )
}
