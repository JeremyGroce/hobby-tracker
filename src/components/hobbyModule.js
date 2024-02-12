import React from 'react';
import '../styling/hobbyModule.css';
import bookIcon from '../img/books.png'
import error from '../img/404.png'

// physically structure the modules themselves
function HobbyModule({title, desc, icon}) {
    const backendURL = 'http://localhost:3001/';

    const newIcon = backendURL + icon;

    return (
        <div className='hobby-module-outer-container'>
            {/* Holds Icon */}
            <div className='hobby-module-inner-left-container'>
                <img src={newIcon}/>
            </div>

            {/* Holds Title and Description */}
            <div className='hobby-module-middle-container'>
                {/* title */}
                <div className='hobby-module-title'>
                    {title}
                </div>

                <div className='hobby-module-description'>
                    {desc}
                </div>
                
            </div>

            {/* Holds Checkbox */}
            <div className='hobby-module-inner-right-container'>
                <input type='checkbox' className='hobby-module-checkbox'></input>
            </div>
        </div>
    );
}

export default HobbyModule;
