import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../views/Main';
import About from '../views/About';
import Info from '../views/Info';
import Member from '../views/Member';
import Join from '../views/Join';
import Test from '../views/Test';

const App = ({ location: { pathname } } = props) => {
  return (
    <>
      <Header pathIndex={pathname} />
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/about" component={ About } />
        <Route path="/info" component={ Info } />
        <Route path="/member" component={ Member } />
        <Route path="/join" component={ Join } />
        <Route path="/test" component={ Test } />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
