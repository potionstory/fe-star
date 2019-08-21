import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faGrinStars, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './JoinCard.scss';

class JoinCard extends Component {
  render() {
    return (
      <>
        <div className="join-wrap">
          <div className="join-card">
            <div className="join-item">
              <span className="title">카톡방 대화명</span>
              <div className="item-box">
                <label htmlFor="01"><FontAwesomeIcon icon={faUserCircle} size="2x" /></label>
                <input type="text" id="01" name="nickname" placeholder="" />
              </div>
            </div>
            <div className="join-item">
              <span className="title">카톡방 대화명</span>
              <div className="item-box">
                <label htmlFor="01"><FontAwesomeIcon icon={faUserCircle} size="2x" /></label>
                <input type="text" id="01" name="nickname" placeholder="" />
              </div>
            </div>
            <div className="join-item">
              <span className="title">카톡방 대화명</span>
              <div className="item-box">
                <label htmlFor="01"><FontAwesomeIcon icon={faUserCircle} size="2x" /></label>
                <input type="text" id="01" name="nickname" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default JoinCard;