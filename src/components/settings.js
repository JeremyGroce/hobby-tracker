import React from 'react';
import '../styling/settings.css';
import settingsIcon from '../img/settings-icon.png';

function settings(){
    return(
        <button className='settings-btn'>
        <div className='outer-container'>
            <img src={settingsIcon} alt='settings-icon.png'/>
        </div>
        </button>
    );
}

export default settings;