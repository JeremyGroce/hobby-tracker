import React, { useState, useEffect } from 'react';
import Module from '../components/hobbyModule.js';
import '../styling/hobbyList.css';

// fetch and display modules on render
function HobbyList({reGET, resetTrigger}) {

    // NOTE: Need to do GET based on date

  const backendURL = 'http://localhost:3001';

  const [modules, setModules] = useState([]);

  // Initial GET on render
  useEffect(()=>{
  fetch(`${backendURL}/`)
    .then(response => response.json())
    .then(data => {
      // store parsed data from fetch
      setModules(data);

        
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
      fetch(`${backendURL}/`)
      .then(response => response.json())
      .then(data => {
        // store parsed data from fetch
        setModules(data);

          
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      // reset trigger to false
      resetTrigger();
    }
  }, [reGET, resetTrigger]); 
 
  
  console.log(reGET);

  return (
    <div className='list-outer-container' draggable='true'>

      {/* Maps the backend data entries to individual displayable modules */}
      {modules.map((module, index) => (
        <Module key={index} title={module.title} desc={module.desc} icon={module.image}/>
      ))}

    </div>
  );
}

export default HobbyList;
