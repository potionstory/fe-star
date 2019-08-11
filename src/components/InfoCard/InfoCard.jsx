import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import koLocale from 'date-fns/locale/ko';
import Calendar from '../Calendar';
import './InfoCard.scss';

class InfoCard extends Component {

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
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
              <Calendar />
            </MuiPickersUtilsProvider>
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