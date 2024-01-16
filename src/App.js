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

  const addModules = (count) => {
    setNumModules(prev => prev+count);
  }

  const toggleFunc = () => {
    setToggle(!toggle);
    console.log("wow");
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
        <AddMenu toggle={toggle}/>



      </div>
      

      <div className='dashboard-hobby-container'>
      <List numModules={numModules} />

      </div>

      <div className='dashboard-settings-container'>
      <Set/>

      </div>

    </div>
    );
}

export default App;
