import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.scss';

class InfoCard extends Component {

  state = {
    date: new Date(),
  };

  onChange = date => this.setState({ date });

  render() {

    const { icon } = this.props;

    return (
      <div className="card-box">
        <div className="card-head">
          <FontAwesomeIcon icon={icon} size="2x" />
          <h3>일시</h3>
        </div>
        <div className="card-body">
          <div className="card-inner">
            <div className="calendar-box">
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
}

export default InfoCard;