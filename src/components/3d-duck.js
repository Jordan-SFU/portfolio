import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei';
import React, { useRef, useEffect } from "react";

function Duck({ pointer }) {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/rubberduck.glb');

    // simple easing for smooth motion
    const targetRot = useRef({ x: 0, y: 0 });

    useFrame(() => {
        if (!ref.current) return;
        // interpolate toward target rotation for smoother, lower-jitter motion
        ref.current.rotation.x += (targetRot.current.x - ref.current.rotation.x) * 0.08;
        ref.current.rotation.y += (targetRot.current.y - ref.current.rotation.y) * 0.08;
        ref.current.rotation.z = Math.PI;
    });

    // update target rotation outside React render cycle
    useEffect(() => {
        let rafId;
        const handleMove = e => {
            // compute relative center
            const mouseX = e.clientX - window.innerWidth / 2;
            const mouseY = e.clientY - window.innerHeight / 2;
            const angleX = Math.atan2(mouseY, window.innerHeight) * Math.PI;
            const angleY = Math.atan2(mouseX, window.innerWidth) * Math.PI;
            targetRot.current.x = angleX / 2 + Math.PI / 2 + Math.PI / 8;
            targetRot.current.y = -angleY / 2;
        };
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <group dispose={null}>
            <mesh
                ref={ref}
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

function DuckCanvas() {
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
            <Canvas shadows dpr={[1, 1.75]} style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={1} />
                <directionalLight
                    castShadow
                    position={[5, 10, 5]}
                    intensity={1}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <Duck />
            </Canvas>
        </div>
    );
}

export default DuckCanvas;
