import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';;
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

import state from '../store';

import React from 'react'
import CustomButton from '../components/CustomButton';

const Home = () => {
    // this is how we use it, a snap is a snapshot/replica of the state in that particular instance where we are calling it. 
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {/* so this is your normal if snap.intro == true, and motion.section is essentially a simple div which has animation attached to it.  */}
            {snap.intro && (<motion.section className='home' {...slideAnimation('left')}>
                {/* for the logo on the top */}
                <motion.header {...slideAnimation('down')}>
                    <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain' />
                </motion.header>
                {/* now we have the rest of the body */}
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className="head-text" style={{ color: '#f0f0f0' }}>UNLEASH YOUR INNER ARTIST.</h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base' style={{ color: '#f0ebeb' }}>Here, you can create your own designs on a tshirt with our brand new customization tool. Wear what is unique. <strong>Wear what defines you.</strong></p>

                        <CustomButton type="filled" title="Check it out here"
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            handleClick={() => state.intro = false}
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home