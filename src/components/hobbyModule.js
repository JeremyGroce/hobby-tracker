import React from 'react';
import '../styling/hobbyModule.css';

function HobbyModule() {
    const checkBox = () =>
    {
        console.log('hello!');
    };

    return (
        <div className='hobby-module-outer-container'>
            <div className='hobby-module-inner-left-container'></div>
            <div className='hobby-module-middle-container'></div>
            <div className='hobby-module-inner-right-container'>
                <input type='checkbox' className='hobby-module-checkbox'></input>
            </div>
        </div>
    );
}

export default HobbyModule;
