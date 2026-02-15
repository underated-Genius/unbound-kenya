'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';
import { hiddenGems } from '@/data/gems';
import { latLngToXYZ, generateTerrainNoise, getTerrainColor } from '@/utils/terrain';
import { useStore } from '@/store/useStore';

// Interactive Orb for each gem
function GemOrb({ gem, onClick, isHighlighted }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  const position = latLngToXYZ(gem.coordinates.lat, gem.coordinates.lng, 8);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Floating animation
    meshRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    
    // Rotation
    meshRef.current.rotation.y += 0.01;
    
    // Scale on hover
    const targetScale = hovered || isHighlighted ? 1.5 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group position={[position.x, 0, position.z]}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(gem);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={isHighlighted ? '#F4AB4D' : '#E86B2C'}
          emissive={isHighlighted ? '#F4AB4D' : '#E86B2C'}
          emissiveIntensity={hovered || isHighlighted ? 1.5 : 0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.5, 32]} />
        <meshBasicMaterial
          color={isHighlighted ? '#F4AB4D' : '#E86B2C'}
          transparent
          opacity={hovered || isHighlighted ? 0.6 : 0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Label on hover */}
      {hovered && (
        <Html center>
          <div className="glass px-3 py-1 rounded-lg text-white text-sm whitespace-nowrap pointer-events-none">
            {gem.name}
          </div>
        </Html>
      )}
    </group>
  );
}

// Kenya terrain mesh
function KenyaTerrain() {
  const geometry = new THREE.PlaneGeometry(10, 12, 40, 50);
  const vertices = geometry.attributes.position.array;
  
  // Apply elevation based on noise
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i];
    const y = vertices[i + 1];
    const elevation = generateTerrainNoise(x, y, 0.3, 0.5);
    vertices[i + 2] = elevation;
  }
  
  geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();

  // Create vertex colors based on elevation
  const colors = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    const elevation = vertices[i + 2];
    const color = getTerrainColor(elevation);
    colors[i] = color[0];
    colors[i + 1] = color[1];
    colors[i + 2] = color[2];
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <meshStandardMaterial vertexColors flatShading />
    </mesh>
  );
}

// 3D Scene Component
function MapScene({ onGemClick, highlightedGem }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 8, 12]} />
      <OrbitControls
        enableZoom={true}
        minDistance={8}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 6}
      />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 5, 0]} color="#F4AB4D" intensity={0.5} />
      
      <KenyaTerrain />
      
      {hiddenGems.map((gem) => (
        <GemOrb
          key={gem.id}
          gem={gem}
          onClick={onGemClick}
          isHighlighted={highlightedGem?.id === gem.id}
        />
      ))}
    </>
  );
}

export default function Map3D() {
  const [isMobile, setIsMobile] = useState(false);
  const { setSelectedGem, openModal, selectedGem } = useStore();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleGemClick = (gem) => {
    setSelectedGem(gem);
    openModal();
  };

  // Mobile fallback: Grid of cards
  if (isMobile) {
    return (
      <section id="map" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-4">
            Hidden <span className="text-gradient">Gems</span>
          </h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Tap any destination to discover more about these unexplored wonders
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hiddenGems.map((gem, index) => (
              <div
                key={gem.id}
                onClick={() => handleGemClick(gem)}
                className="glass cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden rounded-xl"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${gem.image})` }} />
                <div className="p-4">
                  <h3 className="font-display text-xl text-white mb-2">{gem.name}</h3>
                  <p className="text-white/70 text-sm mb-2">{gem.region}</p>
                  <p className="text-white/60 text-sm line-clamp-2">{gem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Full 3D experience
  return (
    <section id="map" className="relative min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
            Interactive <span className="text-gradient">Map</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore Kenya's hidden gems in 3D. Click any glowing orb to discover its secrets.
          </p>
        </div>

        <div className="glass rounded-2xl overflow-hidden" style={{ height: '70vh' }}>
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white">Loading 3D Map...</div>
            </div>
          }>
            <Canvas>
              <MapScene onGemClick={handleGemClick} highlightedGem={selectedGem} />
            </Canvas>
          </Suspense>
        </div>

        <div className="mt-6 text-center text-white/60 text-sm">
          💡 Drag to rotate • Scroll to zoom • Click orbs to explore
        </div>
      </div>
    </section>
  );
}
