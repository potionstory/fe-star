import React, { Component } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import koLocale from 'date-fns/locale/ko';
import moment from 'moment';
import Calendar from '../Calendar';
import CountDown from '../CountDown';
import './DateBox.scss';

class DateCard extends Component {

  state = {
    date: moment('09/27/2019 19:00:00'),
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.state.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  };

  componentWillUnmount() {
    this.stop();
  };

  calculateCountdown(endDate) {
    let diff = (Date.parse(moment(endDate)) - Date.parse(moment())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  stop() {
    clearInterval(this.interval);
  };

  render() {

    const { days, hours, min, sec } = this.state;

    return (
      <>
        <div className="card-body">
          <div className="card-date">
            <div className="card-inner">
              <div className="calendar-box">
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
                <Calendar />
              </MuiPickersUtilsProvider>
              </div>
            </div>
            <div className="card-inner">
              <div className="time-box number">19:00 - 23:00</div>
              <CountDown
                days={days}
                hours={hours}
                min={min}
                sec={sec}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default DateCard;