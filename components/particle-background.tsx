"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import type * as THREE from "three"

function Particles(props: any) {
  const ref = useRef<THREE.Points>(null)
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ff6b35" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  )
}
