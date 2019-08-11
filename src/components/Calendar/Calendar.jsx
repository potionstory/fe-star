import React, { Component } from 'react';
import { DatePicker } from '@material-ui/pickers';
import './Calendar.scss';

class Calendar extends Component {

  state = {
    date: new Date('2019-10-05')
  };

  render() {
    const { date } = this.state;
    return (
      <DatePicker
        autoOk
        variant="static"
        openTo="date"
        value={date}
      />
    );
  };
}

export default Calendar;