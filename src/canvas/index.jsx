import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Shirt from './Shirt';

// fov used here is to show the camera's field of view ie to bring the object closer or further. 
const CanvasModel = () => {
    return (
        <Canvas
            shadows camera={{ position: [0, 0, 0], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <Environment preset='city' />
            <CameraRig>
                <Backdrop />
                <Center>
                    <Shirt />
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModel; 