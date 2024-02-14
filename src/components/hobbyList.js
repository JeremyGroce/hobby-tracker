import React, { useState, useEffect } from 'react';
import Module from '../components/hobbyModule.js';
import '../styling/hobbyList.css';

function HobbyList({reGET, resetTrigger, workingDate}) {

  // backend URL
  const backendURL = 'http://localhost:3001';

  // get today's real date; set modules for recieving data from backend
  const [realDate, setrealDate] = useState('');
  const [modules, setModules] = useState([]);

  // Initial GET and realDate on render for today's date
  useEffect(()=>{

    // get real date (today's date)
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = today.toLocaleDateString(undefined, options);
    setrealDate(formattedDate);

    // GET request for core data
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

  // BOOK MARK
  // NOTE
  // working date and real date aren't different or working in the statement. 
  // also HobbyList keeps re-rendering over and over


  // conditional GET for past dates
  if(workingDate < realDate)
  {
    // get request from checkedData array for that date only
    console.log("past");
  }
  else if(workingDate === realDate || workingDate > realDate)
  {
    // get request from checkedData array for that date (if available) & core data list
    console.log("present");
  }

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
