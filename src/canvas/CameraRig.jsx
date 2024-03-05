// If we dont invoke the camera rig, essentially the shirt will be in the center, just smaller, so we need to sort of point the camera closer to it, so we can see the shirt clearly. 

import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';
import { useRef } from 'react';
import state from '../store';


// Inside the cameraRig tag, we are using the shirt as a prop, thus we need to pass it as a prop and use it in this component. 

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);


    // how to rotate the model? You use the useFrame hook from react three, which essentiallly calculates the new position of the object from its old position (passed in as the parameters) 
    useFrame((state, delta) => {

        // Making sure it stays refernece friendly
        const isBreakPoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;


        // Let us write the initial state of the model. 
        let targetPosition = [-0.4, 0, 2];
        // this pos is calculated roughly by guess. 
        if (snap.intro) {
            if (isBreakPoint) targetPosition = [0, 0, 2]
            if (isMobile) targetPosition = [0, 0.2, 2.5];
        } else {
            if (isMobile) targetPosition = [0, 0.2, 2.5]
            else {
                targetPosition = [0, 0, 2];
            }
        }

        // Set the position of the camera 
        easing.damp3(state.camera.position, targetPosition, 0.25, delta);

        // rotation of the model
        easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
    });


    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig