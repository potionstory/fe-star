import React from 'react';
import './CountDown.scss';

const addLeadingZeros = (value) => {
  value = String(value);
  while (value.length < 2) {
    value = '0' + value;
  }
  return value;
};

const CountDown = ({ days, hours, min, sec }) => {
  return (
    <div className="count-wrap">
      <span className="count-item">
        <span className="count-element">
          <strong className="number">{addLeadingZeros(days)}</strong>
          <span>일</span>
        </span>
      </span>
      <span className="count-item">
        <span className="count-element">
          <strong className="number">{addLeadingZeros(hours)}</strong>
          <span>시간</span>
        </span>
      </span>
      <span className="count-item">
        <span className="count-element">
          <strong className="number">{addLeadingZeros(min)}</strong>
          <span>분</span>
        </span>
      </span>
      <span className="count-item">
        <span className="count-element">
          <strong className="number">{addLeadingZeros(sec)}</strong>
          <span>초</span>
        </span>
      </span>
    </div>
  );
};

export default CountDown;