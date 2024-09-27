import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';
import React, { useRef } from "react";

function Duck({ mousePosition }) {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/rubberduck.glb');

    // Ensure that `useFrame` only runs when the model has fully loaded
    useFrame((state, delta) => {
        if (!ref.current) return; // Check if the reference is attached

        // Get mouse position relative to the center of the screen
        const mouseX = mousePosition.x - window.innerWidth / 2;
        const mouseY = mousePosition.y - window.innerHeight / 2;

        // Calculate rotation angles using trigonometry
        const angleX = Math.atan2(mouseY, window.innerHeight) * Math.PI;
        const angleY = Math.atan2(mouseX, window.innerWidth) * Math.PI;

        // Apply rotations to the duck model
        ref.current.rotation.x = angleX / 2 + Math.PI / 2 + Math.PI / 8;
        ref.current.rotation.y = -angleY / 2;
        ref.current.rotation.z = Math.PI;
    });

    return (
        <group dispose={null}>
            <mesh
                ref={ref} // Attach the reference to the mesh
                castShadow
                receiveShadow
                geometry={nodes.ducky.geometry}
                material={materials['Material.001']}
                rotation={[0, 0, 0]}
                position={[0, -2, 0]}
                scale={[1, 1, 1]}
            />
        </group>
    );
}

useGLTF.preload('/rubberduck.glb');

function DuckCanvas({ mousePosition }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            background: '#535353'
        }}>
            <Canvas shadows style={{ width: '100%', height: '100%' }}>
                {/* Ambient Light */}
                <ambientLight intensity={1} />

                {/* Directional Light */}
                <directionalLight
                    castShadow
                    position={[5, 10, 5]}
                    intensity={1}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                <Duck mousePosition={mousePosition} />
            </Canvas>
        </div>
    );
}

export default DuckCanvas;
