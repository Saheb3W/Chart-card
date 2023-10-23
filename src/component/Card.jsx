import React from 'react';
import '../App.css'; // Import the associated CSS file

function Card() {
  return (
    <div className='container'>
      <div className='image'>
        <h4 className='imageText'>500</h4>
      </div>
      <div className='cardTitle'>
        <div className='header'>SPXUSD</div>
        <div>s&p 500</div>
      </div>
      <div className='amount'>
        <h4>144.5</h4>
      </div>
      <div className='percentage'>
        <div className='values'>
          <p>+12.00</p>
          <p>+1.00</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
