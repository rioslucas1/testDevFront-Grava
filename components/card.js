import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
