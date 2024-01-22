import React, { useState } from 'react';
import DayNav from './components/dayNav.js';
import Cal from './components/cal.js';
import Add from './components/add.js';
import Set from './components/settings.js';
import List from './components/hobbyList.js'
import Theme1 from './themes/theme1.js';
import './styling/app.css'

// temp
import AddMenu from './components/add-menu.js';

function App() {
  // initialize initial # of hobby modules in <List/>
  const [numModules, setNumModules] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // creates the module with the inputted data
  const addModules = (modTitle, modDesc) => {
    let count = 1;
    setTitle(modTitle);
    console.log(modTitle);
    setDesc(modDesc);
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
        <AddMenu toggle={toggle} onButtonPress={() => addModules(title, desc)} />



      </div>
      

      <div className='dashboard-hobby-container'>
      <List numModules={numModules} hobbyTitle={title}/>

      </div>

      <div className='dashboard-settings-container'>
      <Set/>

      </div>

    </div>
    );
}

export default App;
