import React, { useState, useEffect } from 'react';
import Module from '../components/hobbyModule.js';
import '../styling/hobbyList.css';

// fetch and display modules on render
function HobbyList({reGET, resetTrigger, currentDate}) {


  // backend URL
  const backendURL = 'http://localhost:3001';

  // get today's real date; set modules for recieving data from backend
  const [realDate, setrealDate] = useState('');
  const [modules, setModules] = useState([]);

  // get actual date for today
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = today.toLocaleDateString(undefined, options);
  setrealDate(formattedDate);

  // Initial GET on render for today's date
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

  // conditional GET for past dates

  // if(current date <  actual date)
  /* {
      pull from checkedData array only
    }
    else
    {
      pull checkedData for that day + current list 
    }

  */
  

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
