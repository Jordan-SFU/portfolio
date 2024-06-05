import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Duck({ mousePosition }) {
    const ref = useRef();

    useFrame((state, delta) => {
        // Get mouse position relative to the center of the screen
        const mouseX = mousePosition.x - window.innerWidth / 2;
        const mouseY = mousePosition.y - window.innerHeight / 2;
    
        // Calculate rotation angles using trigonometry
        const angleX = Math.atan2(mouseY, window.innerHeight) * Math.PI;
        const angleY = Math.atan2(mouseX, window.innerWidth) * Math.PI;
    
        // Apply rotations
        ref.current.rotation.x = angleX / 2;
        ref.current.rotation.y = angleY / 2;
    });

    return (
        <mesh ref={ref}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial attach="material" color="gray" />
        </mesh>
    );
}

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
            <Canvas style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={2} />
                <Duck mousePosition={mousePosition} />
            </Canvas>
        </div>
    );
}

export default DuckCanvas;
