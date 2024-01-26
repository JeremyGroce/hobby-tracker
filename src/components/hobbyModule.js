import React from 'react';
import '../styling/hobbyModule.css';
import artIcon from '../img/books.png'

// physically structure the modules themselves
function HobbyModule({title, desc, icon}) {
    return (
        <div className='hobby-module-outer-container'>
            {/* Holds Icon */}
            <div className='hobby-module-inner-left-container'>
                {icon}
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
