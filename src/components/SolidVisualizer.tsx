import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, PerspectiveCamera, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SolidVisualizerProps {
  fn: (x: number) => number;
  range: [number, number];
  axis: 'x' | 'y';
  segments?: number;
  rotationAngle?: number; // 0 to 2*PI
}

const SolidMesh = ({ fn, range, axis, segments = 64, rotationAngle = Math.PI * 2 }: SolidVisualizerProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    const steps = 50;
    const [min, max] = range;

    for (let i = 0; i <= steps; i++) {
      const t = min + (max - min) * (i / steps);
      const val = fn(t);
      
      if (axis === 'x') {
        // For X-axis rotation, the function value is the radius
        // LatheGeometry rotates around Y, so we provide (radius, height)
        points.push(new THREE.Vector2(val, t));
      } else {
        // For Y-axis rotation, x is the radius
        points.push(new THREE.Vector2(t, val));
      }
    }

    return new THREE.LatheGeometry(points, segments, 0, rotationAngle);
  }, [fn, range, axis, segments, rotationAngle]);

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={axis === 'x' ? [0, 0, -Math.PI / 2] : [0, 0, 0]}>
      <meshStandardMaterial 
        color="#3b82f6" 
        side={THREE.DoubleSide} 
        transparent 
        opacity={0.7} 
        wireframe={false}
        flatShading={false}
      />
    </mesh>
  );
};

const AxisLines = () => (
  <>
    {/* X Axis */}
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([-10, 0, 0, 10, 0, 0])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#ef4444" linewidth={2} />
    </line>
    {/* Y Axis */}
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([0, -10, 0, 0, 10, 0])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#22c55e" linewidth={2} />
    </line>
    {/* Z Axis */}
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([0, 0, -10, 0, 0, 10])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#3b82f6" linewidth={2} />
    </line>
  </>
);

export const SolidVisualizer: React.FC<SolidVisualizerProps & { title: string }> = ({ title, ...props }) => {
  return (
    <div className="w-full h-[400px] bg-slate-900 rounded-xl overflow-hidden relative border border-slate-700 shadow-inner">
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-white font-medium text-sm bg-slate-800/80 px-3 py-1 rounded-full border border-slate-600 backdrop-blur-sm">
          {title}
        </h3>
      </div>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <AxisLines />
        <Grid 
          infiniteGrid 
          fadeDistance={30} 
          sectionSize={1} 
          sectionThickness={1} 
          sectionColor="#334155" 
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#1e293b"
        />
        
        <SolidMesh {...props} />
      </Canvas>
      <div className="absolute bottom-4 right-4 text-[10px] text-slate-400 font-mono flex gap-3">
        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full" /> Eje X</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full" /> Eje Y</span>
      </div>
    </div>
  );
};
