import React from 'react'
// using this to switch in between colorPicker, AIPicker and FilePicker
import { useSnapshot } from 'valtio';
import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {

    const snap = useSnapshot(state);

    const activeTagStyles = isFilterTab && isActiveTab ? { backgroundColor: snap.color, opacity: 0.5 } : { backgroundColor: "transparent", opacity: 1 }

    return (
        <div key={tab.name}
            className={`tab-btn ${isFilterTab ? 'rounded-full-glasmorphism' : 'rounded - 4'}`}
            onClick={handleClick}
        >
            <img src={tab.icon} alt={tab.name} />

        </div>
    )
}

export default Tab; 