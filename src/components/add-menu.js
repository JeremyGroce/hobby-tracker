import React, { useState } from 'react';
import '../styling/add-menu.css';
import bookIcon from '../img/books.png';
import weightsIcon from '../img/workout.png';
import compIcon from '../img/computer.png';
import artIcon from '../img/art.png';

function AddMenu({toggle, reGET})
{   
    // useStates or user title and desc input and user clicked icon
    const[hobbyTitle, setTitle] = useState('');
    const[hobbyDesc, setDesc]   = useState('');
    const[hobbyIcon, setIcon]   = useState(null);


    // handler function or clicked image
    const handleImg = (picture) =>
    {
        setIcon(picture);
    }


    // populate new modules and then clear the input boxes
    const handleSubmit = () =>
    {
        var input1 = document.getElementById('title-inputBox');
        var input2 = document.getElementById('desc-inputBox');
        var input3 = document.getElementById('iconPic');

        // if inputbox is empty, shake, otherwise submit new module
        if(input1.value === '' || input2.value === '' || hobbyIcon === null)
        {
            if(input1.value === '')
            {
                input1.classList.add('shake', 'flash');
            }

            if(input2.value === '')
            {
                input2.classList.add('shake', 'flash');

            }

            if(hobbyIcon === null)
            {
                input3.classList.add('shake', 'flash');

            }

            // remove shake after the animation finishes
            setTimeout(function()
            {
                input1.classList.remove('shake', 'flash');
                input2.classList.remove('shake', 'flash');
                input3.classList.remove('shake', 'flash');
            }, 500);
        }
        //Create module if title and desc are occupied with valid inputs
        else 
        {
            // POST request 
            const newHobby = {
                title: hobbyTitle,
                desc: hobbyDesc,
                image: hobbyIcon    // <--- Localhost3001 uses normal filepath. I am using static here. not working
            };

            // POST request options
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newHobby)
            };

            // Send POST req
            fetch('http://localhost:3001/create', options)
                .then(response => response.json())
                .then(data => {
                    console.log('New hobby entry created:', data);
                })
                .catch(error => {
                    console.error('Error creating hobby entry:', error);
                });
            

            // send trigger to reGET <List/>
            reGET();

            // clear input boxes and icon selection
            setTitle('');
            setDesc('');
            setIcon(null);

        }
    }


    // display componenent on button click, conditionally return title and desc
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

                    <div id='iconPic' className='addMenu-icon-container'>
                        <div className='addMenu-Icon-text'>
                        Icon
                        </div>
                        <img src={bookIcon} className={`clickedIcon ${hobbyIcon === bookIcon ? 'gold-border' : ''}`} onClick={() => handleImg(bookIcon)} />
                        <img src={weightsIcon} className={`clickedIcon ${hobbyIcon === weightsIcon ? 'gold-border' : ''}`} onClick={()=>handleImg(weightsIcon)}/>
                        <img src={compIcon} className={`clickedIcon ${hobbyIcon === compIcon ? 'gold-border' : ''}`} onClick={()=>handleImg(compIcon)}/>
                        <img src={artIcon} className={`clickedIcon ${hobbyIcon === artIcon ? 'gold-border' : ''}`} onClick={()=>handleImg(artIcon)}/>


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