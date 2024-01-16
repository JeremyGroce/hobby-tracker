import React, { useState, useEffect } from 'react';
import lArrow from '../img/leftArrow.png';
import rArrow from '../img/rightArrow.png';
import '../styling/dayNav.css';

function DayNav() {

  const [currDate, setCurrDate] = useState('');

  useEffect(() => {
    updateFormattedDate();
  }, []);

  const updateFormattedDate = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    setCurrDate(formattedDate);
  }
  
  const decrementDate = () => {
    const currentDate = new Date(currDate);
    currentDate.setDate(currentDate.getDate()-1);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    setCurrDate(formattedDate);
    
  }

  const incrementDate = () => {
    const currentDate = new Date(currDate);
    currentDate.setDate(currentDate.getDate() + 1);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    setCurrDate(formattedDate);
  }

  return (

    <div className='date-navigation-bar'>
      <div className='l-button'>
        <button onClick={decrementDate} className='button'></button>
      </div>
        
      <button onClick={updateFormattedDate} className='background-btn'>
        <div className='dateBackground'>
          <div className='dateText'>
          <p>
  {currDate === new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) 
    ? <>
        Today
        <br />
        {currDate}
      </>
    : currDate
  }
</p>
  
          </div>
        </div>
      </button>

      <div className='r-button'>
        <button onClick={incrementDate} className='button'></button>
      </div>
    </div>
    
    
  );
}

export default DayNav;
