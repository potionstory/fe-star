import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../views/Main';
import Member from '../views/Member';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Main } />
      <Route path="/member" component={ Member } />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
