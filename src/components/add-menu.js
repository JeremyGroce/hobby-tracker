import React, { useState } from 'react';
import '../styling/add-menu.css';

function AddMenu({toggle})
{   
    return(
        <div>
            {toggle && (
                <div className='addMenu-outer-container'>
                    <div className='addMenu-title-container'>
                        <p>title</p>
                    </div>

                    <div className='addMenu-desc-container'>
                        <p>desc</p>
                    </div>

                    <div className='addMenu-icon-container'>
                        <p>icon</p>
                    </div>

                    <button className='addMenu-submit-btn'>
                    <div className='addMenu-submit-container'>
                        <p>submit</p>
                    </div>
                    </button>
                </div>
            )}
        </div>
    )
}

export default AddMenu;