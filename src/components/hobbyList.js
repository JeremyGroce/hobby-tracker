import React, { useState, useEffect } from 'react';
import Module from '../components/hobbyModule.js';
import '../styling/hobbyList.css';

// fetch and display modules on render
function HobbyList({reGET, resetTrigger}) {
  // const backendURL = 'http://localhost:3001';

  // NOTE: Need to do GET based on date

  // Initial GET on render
  useEffect(()=>{
  // fetch(`${backendURL}/api/hobbies`)
  //   .then(response => response.json())
  //   .then(data => {})
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
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
      <Module/>
    </div>
  );
}

export default HobbyList;
