import React, { useState } from 'react';
import '../styling/add.css';
import addIcon from '../img/add-icon.png';

function Add({onAddClick}) {
  const [isBoxAdded, setIsBoxAdded] = useState(false);

  const handleAddClick = () => {
    // onAddClick(isBoxAdded ? 2 : 1);
    onAddClick(!isBoxAdded); 
    console.log('button clicked');
  }

  return (
    <button className='add-btn' onClick={handleAddClick}>
      <div className='add-btn-outer-container'>
        <img src={addIcon} alt='add-icon.png'/>
      </div>
    </button>
  );
}

export default Add;
