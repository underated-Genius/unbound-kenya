'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as THREE from 'three';

// 3D Terrain Background
function Terrain() {
  const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
  const vertices = geometry.attributes.position.array;
  
  // Apply noise-like elevation to vertices
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i];
    const y = vertices[i + 1];
    const noise = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 1.5;
    vertices[i + 2] = noise;
  }
  
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 3, 0, 0]} position={[0, -5, -5]}>
      <meshStandardMaterial
        color="#D4A574"
        wireframe={false}
        flatShading
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Floating compass
function FloatingCompass() {
  return (
    <group position={[3, 2, 0]}>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[1, 0.1, 16, 32]} />
        <meshStandardMaterial color="#E86B2C" emissive="#E86B2C" emissiveIntensity={0.5} />
      </mesh>
      <mesh>
        <coneGeometry args={[0.3, 1.5, 4]} />
        <meshStandardMaterial color="#F4AB4D" emissive="#F4AB4D" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// 3D Scene
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#E86B2C" intensity={0.5} />
      
      <Terrain />
      <FloatingCompass />
      
      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            Math.random() * 10,
            (Math.random() - 0.5) * 20
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#F4AB4D"
            emissive="#F4AB4D"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </>
  );
}

export default function Hero() {
  const scrollToRegions = () => {
    document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800" />}>
          <Canvas>
            <Scene />
          </Canvas>
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 text-shadow-lg"
          >
            Unbound <span className="text-gradient">Kenya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 text-shadow"
          >
            Discover the <span className="text-kenya-yellow font-bold">95%</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Beyond the safaris everyone knows, lies a Kenya of hidden beaches, mystical deserts, 
            and forgotten forests waiting to share their stories with you.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToRegions}
            className="btn-primary text-lg"
          >
            Explore Now
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
