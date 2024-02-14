import React, { useState } from 'react';
import DayNav from './components/dayNav.js';
import Cal from './components/cal.js';
import Add from './components/add.js';
import Set from './components/settings.js';
import List from './components/hobbyList.js'    //displays added modules

import './styling/app.css'

// temp
import AddMenu from './components/add-menu.js';

function App() {
  const [toggle, setToggle] = useState(false);   //toggle submission menu
  const [trigger, setTrigger] = useState(false); //trigger rerender of list on event
  const [currDate, setDate] = useState('');   //set current date for get/post requests

  // toggle function to handle clicking add button
  const toggleFunc = () => {
    setToggle(!toggle);
  }

  // trigger function to handle submission or calendar change
  const triggerGET = () => {
    setTrigger(!trigger);
  }

  // get current date from navBar changes
  const sendDate = (currDate) => {
    setDate(currDate);
    console.log(currDate);
  }


  return (
    <div className='dashboard-outer-container'>

      <div className='dashboard-outer-container-first-row'>

        {/* Navigation task bar */}
        <div className='dashboard-nav-container'>
          <Cal/>
          <DayNav reGET={triggerGET} sendDate={sendDate}/>
          <Add onAddClick={()=>toggleFunc()}/>
        </div>

        {/* New Hobby Module creation screen */}
        <AddMenu toggle={toggle} reGET={triggerGET}/>
      </div>
      
      {/* Display hobby Modules */}
      <div className='dashboard-hobby-container'>
        <List reGET={trigger} resetTrigger={triggerGET} workingDate={setDate}/> 
      </div>

      <div className='dashboard-settings-container'>
        <Set/>
      </div>

    </div>
    );
}

export default App;
