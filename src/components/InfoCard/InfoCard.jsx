import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import DateBox from '../DateBox';
import MapBox from '../MapBox';
import './InfoCard.scss';

const InfoCard = () => {
  return (
    <>
      <div className="card-box">
        <div className="card-head">
          <FontAwesomeIcon icon={faCalendarDay} size="2x" />
          <h3>일시</h3>
        </div>
        <DateBox />
      </div>
      <div className="card-box">
        <div className="card-head">
          <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
          <h3>장소</h3>
        </div>
        <MapBox />
      </div>
    </>
  );
};

export default InfoCard;