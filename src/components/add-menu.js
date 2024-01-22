import React, { useState } from 'react';
import '../styling/add-menu.css';
import bookIcon from '../img/books.png';
import weightsIcon from '../img/workout.png';
import compIcon from '../img/computer.png';
import artIcon from '../img/art.png';

function AddMenu({toggle, onButtonPress})
{   
    const[hobbyTitle, setTitle] = useState('');
    const[hobbyDesc, setDesc] = useState('');

    // Need to use this function to totally populate new modules and then clear the input boxes
    const handleSubmit = () =>
    {
        // create module
        onButtonPress(1, hobbyTitle, hobbyDesc);

        // clear input boxes
        setTitle('');
        setDesc('');
    }


    return(
        <div>
            {toggle && (
                <div className='addMenu-outer-container'>
                    <div className='addMenu-title-container'>
                        <div className='addMenu-title-text'>
                            Hobby
                            </div>
                        <input 
                            className='inputBox' 
                            type='text' 
                            value={hobbyTitle}
                            placeholder='Workout, Read, Code...'
                            onChange={(e)=>setTitle(e.target.value)}></input>

                    </div>

                    <div className='addMenu-desc-container'>
                        <div className='addMenu-description-text'>
                        Description
                        </div>
                        <input 
                                className='inputBox' 
                                type='text' 
                                value={hobbyDesc}
                                placeholder='for an hour...10 pages/day...'
                                onChange={(e)=>setDesc(e.target.value)}></input>

                    </div>

                    <div className='addMenu-icon-container'>
                        <div className='addMenu-Icon-text'>
                        icon
                        </div>
                        <img src={bookIcon}/>
                        <img src={weightsIcon}/>
                        <img src={compIcon}/>
                        <img src={artIcon}/>


                    </div>

                    <button className='addMenu-submit-btn' onClick={handleSubmit}>
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