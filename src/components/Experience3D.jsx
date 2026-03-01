import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Center } from '@react-three/drei';
import { XR, createXRStore } from '@react-three/xr';

const store = createXRStore();

const Experience3D = () => {
  const [isVRSupported, setIsVRSupported] = useState(false);

  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-vr').then((supported) => setIsVRSupported(supported));
    }
  }, []);

  return (
    <div className="w-full h-full bg-[#050b14] relative">
      <button 
        onClick={() => isVRSupported && store.enterVR()}
        disabled={!isVRSupported}
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold tracking-wider transition-all shadow-[0_0_15px_rgba(115,194,240,0.3)] hover:shadow-[0_0_25px_rgba(115,194,240,0.5)] ${!isVRSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isVRSupported ? 'ENTER VR' : 'VR NOT SUPPORTED'}
      </button>

      <Canvas camera={{ position: [0, 1.6, 3], fov: 70 }}>
        <XR store={store}>

          {/* Lumières */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          {/* Un objet 3D simple (Un cube interactif) */}
          <Center top position={[0, 1, -1]}>
            <mesh onClick={() => alert("Interacted!")}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#73C2F0" />
            </mesh>
            
            {/* Texte 3D pour Afri Educ Tech */}
            <mesh position={[0, 1.5, 0]}>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial color="#ba3a0f" />
            </mesh>
          </Center>

          {/* Sol pour ne pas tomber dans le vide en VR */}
          <gridHelper args={[20, 20]} />
        </XR>

        {/* Contrôles pour ceux qui n'ont pas de casque (Souris) */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Experience3D;