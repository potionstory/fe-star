import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

const Root = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Route path="/" component={ App }></Route>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;