import React from 'react';
import './ContentsCard.scss';

const Contents = (props) => {

  const { image, title, text } = props;

  return (
    <div className="card-box">
      <div className="card-inner">
        <i>
          <img src={image} />
        </i>
        <div className="text-box">
          <div className="description">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;