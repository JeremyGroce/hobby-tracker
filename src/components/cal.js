import React from 'react';
import '../styling/cal.css'
import calIcoon from '../img/cal-icon.png'


function cal() {
    return(
        <button className='calendar-btn'>
        <div className='calendar-btn-outer-container'>
            <img src={calIcoon} alt='calendar.png' />
        </div>
        </button>
    );
}

export default cal;
