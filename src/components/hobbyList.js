import React, { useState } from 'react';
import Module from '../components/hobbyModule.js';
import Add from '../components/add.js';
import '../styling/hobbyList.css';

function HobbyList({numModules}) {
  return (
      <div className='list-outer-container' draggable='true'>
        {[...Array(numModules)].map((_, index) => (
          <Module key={index} />        
        ))}
      </div>
  );
}

export default HobbyList;
