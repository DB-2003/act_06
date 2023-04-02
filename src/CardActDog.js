import React from 'react';
import './styles/CardActDog.css';

function CardActDog({ image, activity }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{activity}</p>
      </div>
      <h5>Here is a dog for inspiration</h5>
      <img src={image} alt="Random dog" />
    </div>
  );
}

export default CardActDog;
