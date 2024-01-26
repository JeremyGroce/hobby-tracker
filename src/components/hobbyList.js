import React, { useState } from 'react';
import Module from '../components/hobbyModule.js';
import Add from '../components/add.js';
import '../styling/hobbyList.css';

// contain and display modules
function HobbyList({numModules, hobbyTitle, hobbyDesc, hobbyIcon}) {


  // create an individual array that is self-contained as a module with unique ids

  // problem !!! -> this is being activated when I click the add button and being called twice when I click submit
  const modules = Array.from({length:4}, (_,index)=>(
  {
      id: index,
      title: hobbyTitle,
      desc: hobbyDesc,
      icon: hobbyIcon,
  }));
  console.log(`Created Module with id: ${module.id}`);

  
  // return the array of populated modules
  return (
      // <div className='list-outer-container' draggable='true'>
      //   {[...Array(numModules)].map((_, index) => (
      //     // <Module key={index} /> 
      //     <Module title={hobbyTitle} desc={hobbyDesc} icon={<img src={hobbyIcon}/>}/>      
      //   ))}
      // </div>
      1
  );
}

export default HobbyList;
