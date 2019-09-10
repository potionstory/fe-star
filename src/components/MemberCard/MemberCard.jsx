import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import './MemberCard.scss';

const MemberCard = () => {
  return (
    <>
      <div className="member-wrap">
        <div className="member-card">
          <div className="card-head">
            <FontAwesomeIcon icon={faAsterisk} size="2x" />
            <h3>참가 확정</h3>
          </div>
          <div className="card-body">
            확정 인원
          </div>
        </div>
        <div className="member-card">
          <div className="card-head">
            <FontAwesomeIcon icon={faAsterisk} size="2x" />
            <h3>참가 대기</h3>
          </div>
          <div className="card-body">
            대기 인원
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;