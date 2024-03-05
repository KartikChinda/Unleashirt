// import React from 'react';
// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useSnapshot } from 'valtio';
// import config from '../config/config';
// import state from '../store';
// import { download } from '../assets';
// import { downloadCanvasToImage, reader } from '../config/helpers';
// import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
// import { fadeAnimation, slideAnimation } from '../config/motion';
// import CustomButton from '../components/CustomButton'

// import ColorPicker from '../components/ColorPicker';
// import Tab from '../components/Tab';
// import FilePicker from '../components/FilePicker';


// const Customizer = () => {
//     const snap = useSnapshot(state);

//     // control what happens when you click on a particular tab. 
//     const [file, setFile] = useState("");
//     const [generatingImg, setGeneratingImg] = useState(false);
//     const [activeEditorTab, setActiveEditorTab] = useState("");
//     const [activeFilterTab, setActiveFilterTab] = useState({
//         logoShirt: true,
//         stylishShirt: false,
//     })

//     const generateTabContent = () => {
//         switch (activeEditorTab) {
//             case "colorpicker":
//                 return <ColorPicker />
//             case "filepicker":
//                 return <FilePicker
//                     file={file}
//                     setFile={setFile}
//                     readFile={readFile}
//                 />
//             default:
//                 return null;
//         }
//     }

//     return (
//         <AnimatePresence>
//             {!snap.intro && (
//                 <>
//                     <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation('left')}>
//                         <div className="flex items-center min-h-screen">
//                             <div className="editortabs-container tabs">
//                                 {EditorTabs.map((tab) => (
//                                     <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
//                                 ))}
//                             </div>
//                         </div>
//                         {/* As soon as the tabs are shown, we need to call this function to ensure that we are displaying the one correctly clicked.  */}
//                         {generateTabContent()}
//                     </motion.div>
//                     <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
//                         <CustomButton type="filled" title="Can't do it, take me back" handleClick={() => state.intro = true} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
//                     </motion.div>

//                     <motion.div className="filtertabs-container" {...slideAnimation('up')}>


//                         {FilterTabs.map((tab) => (
//                             <Tab key={tab.name} tab={tab} isFilterTab isActiveTab="" handleClick={() => { }} />
//                         ))}

//                     </motion.div>
//                 </>
//             )}
//         </AnimatePresence>
//     )
// }

// export default Customizer; 


import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {
    const snap = useSnapshot(state);

    const [file, setFile] = useState('');

    const [prompt, setPrompt] = useState('');
    const [generatingImg, setGeneratingImg] = useState(false);

    const [activeEditorTab, setActiveEditorTab] = useState("");
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false,
    })

    // show tab content depending on the activeTab
    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case "filepicker":
                return <FilePicker
                    file={file}
                    setFile={setFile}
                    readFile={readFile}
                />
            default:
                return null;
        }
    }



    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div
                        key="custom"
                        className="absolute top-0 left-0 z-10"
                        {...slideAnimation('left')}
                    >
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map((tab) => (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        handleClick={() => setActiveEditorTab(tab.name)}
                                    />
                                ))}

                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 right-5"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            type="filled"
                            title="Go Back"
                            handleClick={() => state.intro = true}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>

                    <motion.div
                        className='filtertabs-container'
                        {...slideAnimation("up")}
                    >
                        {FilterTabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                tab={tab}
                                isFilterTab
                                isActiveTab={activeFilterTab[tab.name]}
                                handleClick={() => handleActiveFilterTab(tab.name)}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Customizer