import React, { useState } from 'react';
import DayNav from './components/dayNav.js';
import Cal from './components/cal.js';
import Add from './components/add.js';
import Set from './components/settings.js';
import List from './components/hobbyList.js'
import Theme1 from './themes/theme1.js';
import compIcon from './img/computer.png';

import './styling/app.css'

// temp
import AddMenu from './components/add-menu.js';

function App() {
  // initialize initial # of hobby modules in <List/>
  const [numModules, setNumModules] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState(null);

  // creates the module with the inputted data
  const addModules = (enteredTitle, enteredDesc, enteredIcon) => {

    // create 1 module
    let count = 1;

    // set as inputted title, description, and icon
    setTitle(enteredTitle);
    setDesc(enteredDesc);
    setIcon(enteredIcon);

    // increment number of modules
    setNumModules(prev => prev+count);

  }

  // toggle function to handle clicking
  const toggleFunc = () => {
    setToggle(!toggle);
  }


  return (
    <div className='dashboard-outer-container'>

      <div className='dashboard-outer-container-first-row'>

        {/* Navigation task bar */}
        <div className='dashboard-nav-container'>
          <Cal/>
          <DayNav/>
          {/* <Add onAddClick={() => addModules(1)} /> */}
          <Add onAddClick={()=>toggleFunc()}/>
        </div>

        {/* New Hobby Module creation screen */}
        <AddMenu toggle={toggle} onButtonPress={(enteredTitle, enteredDesc, enteredIcon) => addModules(enteredTitle, enteredDesc, enteredIcon)} />



      </div>
      

      <div className='dashboard-hobby-container'>

      <List numModules={numModules} hobbyTitle={title} hobbyDesc={desc} hobbyIcon={icon}/> 

      </div>

      <div className='dashboard-settings-container'>
      <Set/>

      </div>

    </div>
    );
}

export default App;
