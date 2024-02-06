import React, { useState, useEffect } from 'react';
import Module from '../components/hobbyModule.js';
import '../styling/hobbyList.css';

// fetch and display modules on render
function HobbyList({reGET, resetTrigger}) {

    // NOTE: Need to do GET based on date

  const backendURL = 'http://localhost:3001';

  const [title, setTitle] = useState('');
  const [desc, setDesc]   = useState('');

  // Initial GET on render
  useEffect(()=>{
  fetch(`${backendURL}/`)
    .then(response => response.json())
    .then(data => {
      setTitle(data[0]);
      setDesc(data[1]);
        
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  // conditionally call another GET request on event trigger
  useEffect(() => {
    // if reGET === true, do another GET request
    if (reGET) {
      // GET request
      // -----------

      // reset trigger to false
      resetTrigger();
    }
  }, [reGET, resetTrigger]); 
 
  
  console.log(reGET);

  return (
    <div className='list-outer-container' draggable='true'>
      <Module title={title} desc={desc}/>
    </div>
  );
}

export default HobbyList;
