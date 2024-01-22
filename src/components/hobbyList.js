import React, { useState } from 'react';
import Module from '../components/hobbyModule.js';
import Add from '../components/add.js';
import '../styling/hobbyList.css';

function HobbyList({numModules, hobbyTitle, hobbyDesc}) {
  return (
      <div className='list-outer-container' draggable='true'>
        {[...Array(numModules)].map((_, index) => (
          // <Module key={index} /> 
          <Module title={hobbyTitle} desc={hobbyDesc}/>        
        ))}
      </div>
  );
}

export default HobbyList;
