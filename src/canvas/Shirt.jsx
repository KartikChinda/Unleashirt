import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';


const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt_baked.glb');

    const logoTexture = useTexture(snap.logoDecal);
    const shirtTexture = useTexture(snap.fullDecal);


    useFrame((state, delta) => {
        easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
    })


    // the reason we have to do this is because sometimes despite changes react will not render the state, so we need to make sure that the key is passed which will get changed whenever the snap will get changed and hence the component will rerender. 
    const stateChangeConfirm = JSON.stringify(snap);

    return (
        <group key={stateChangeConfirm}>
            <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} dispose={null}>
                {/* not sure what the dispose null does, it just needs to be there or it doesnt work */}
                {snap.isFullTexture && (
                    <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.15} map={fullTexture} />
                )}

                {snap.isLogoTexture && (
                    <Decal position={[0, 0.03, 0.14]} rotation={[0, 0, 0]} scale={0.15} map={logoTexture} />
                )}
            </mesh>
        </group>
    )
}

export default Shirt