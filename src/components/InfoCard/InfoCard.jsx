import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faMapMarkedAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import DateBox from '../DateBox';
import MapBox from '../MapBox';
import ScheduleBox from '../ScheduleBox';
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
      <div className="card-box">
        <div className="card-head">
          <FontAwesomeIcon icon={faStopwatch} size="2x" />
          <h3>일정</h3>
        </div>
        <ScheduleBox />
      </div>
    </>
  );
};

export default InfoCard;