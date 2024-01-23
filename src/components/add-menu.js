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
        var input1 = document.getElementById('title-inputBox');
        var input2 = document.getElementById('desc-inputBox');

        // if inputbox is empty, shake, otherwise submit new module
        if(input1.value === '' || input2.value === '')
        {
            // make input box shake
            input1.classList.add('shake', 'flash');
            input2.classList.add('shake', 'flash');

            // remove shake after the animation finishes
            setTimeout(function()
            {
                input1.classList.remove('shake', 'flash');
                input2.classList.remove('shake', 'flash');
            }, 500);
        }
        else //Create module if title and desc are occupied with valid inputs
        {
            // create module
            onButtonPress(hobbyTitle, hobbyDesc);

            // clear input boxes
            setTitle('');
            setDesc('');
        }
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
                            id='title-inputBox'
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
                                id='desc-inputBox'
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