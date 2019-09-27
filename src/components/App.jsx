import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../views/Main';
import About from '../views/About';
import Info from '../views/Info';
import Member from '../views/Member';
import Join from '../views/Join';
import Quiz from '../views/Quiz';
import Quiz1 from '../views/Quiz1';
import Quiz2 from '../views/Quiz2';
import Quiz3 from '../views/Quiz3';
import Quiz4 from '../views/Quiz4';
import Quiz5 from '../views/Quiz5';
import Quiz6 from '../views/Quiz6';
import Quiz7 from '../views/Quiz7';
import Quiz8 from '../views/Quiz8';
import Test from '../views/Test';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/about" component={ About } />
        <Route path="/info" component={ Info } />
        <Route path="/member" component={ Member } />
        <Route path="/join" component={ Join } />
        <Route path="/test" component={ Test } />
        {/* <Route path="/quiz/1" component={ Quiz1 } />
        <Route path="/quiz/2" component={ Quiz2 } />
        <Route path="/quiz/3" component={ Quiz3 } />
        <Route path="/quiz/4" component={ Quiz4 } />
        <Route path="/quiz/5" component={ Quiz5 } />
        <Route path="/quiz/6" component={ Quiz6 } />
        <Route path="/quiz/7" component={ Quiz7 } />
        <Route path="/quiz/8" component={ Quiz8 } />
        <Route path="/quiz" component={ Quiz } /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
