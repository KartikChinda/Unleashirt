import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
    const shadows = useRef();

    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={1}
            scae={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}
            color='#000000'
        >
            <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.24}
                ambient={0.25}
                position={[5, 5, -10]}
                color='#fff'
            />
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={0.4}
                ambient={0.55}
                position={[-5, 5, -9]}
                color='#fff'
            />
        </AccumulativeShadows>
    )
}

export default Backdrop