import React, { Component } from 'react';
import { DatePicker } from '@material-ui/pickers';
import './Calendar.scss';

class Calendar extends Component {

  state = {
    date: new Date('2019-09-27')
  };

  render() {
    const { date } = this.state;
    return (
      <DatePicker
        autoOk
        variant="static"
        openTo="date"
        value={date}
        onChange={() => {return null;}}
      />
    );
  };
}

export default Calendar;