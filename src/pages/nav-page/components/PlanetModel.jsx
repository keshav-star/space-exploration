import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";


const PlanetModel = ({setTitle}) => {

    return (
        <div className="w-full h-72 relative">
            <Canvas camera={{ position: [0, 0, 1.5] }}>
                {/* Lighting */}
                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 2]} intensity={2} />

                {/* Load 3D Model and Pass Title Setter */}
                <Scene setTitle={setTitle} />

                <OrbitControls  enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default PlanetModel;
