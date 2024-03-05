
// here you can notice that we are not sending props but we are destructuring the props, this is a vite error, vite goes crazy if you mention props for some reason, checkout more into it. 

import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';

const CustomButton = ({ type, title, customStyles, handleClick }) => {

    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#fff'
            }
        }
    }


    return (
        <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)} onClick={handleClick}>
            {title}

        </button>
    )
}

export default CustomButton; 