import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.scss';

const InfoCard = (props) => {
  const { icon } = props;
  return (
    <div className="card-box">
      <div className="card-head">
        <FontAwesomeIcon icon={icon} size="2x" />
        <h3>일시</h3>
      </div>
      <div className="card-body">
        <div className="card-inner">
          <div className="date-box">
            <div className="year">
              <span className="number">2</span>
              <span className="number">0</span>
              <span className="number">1</span>
              <span className="number">9</span>
            </div>
            <div className="month-day">
              <span className="number">1</span>
              <span className="number">0</span>
              <span className="number">0</span>
              <span className="number">5</span>
            </div>
            <div className="week-name">토요일</div>
            15:00 - 20:00
          </div>
        </div>
        <div className="card-inner">
          <div className="calendar-box">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;