import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// React Router, browserHistory provides a way to track url changes.
// There are different types of history tracking (eg. hashHistory).
import { Router, browserHistory } from 'react-router'; 
import routes from './routes';
import promise from 'redux-promise';

//import App from './components/app'; // Took out since we are going to import form react-router
import reducers from './reducers'; 

const createStoreWithMiddleware = applyMiddleware(
  promise 
)(createStore);

ReactDOM.render(
  // <App /> is removed since we are dealing with routes. Replaced by history to track url changes.
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = { browserHistory } routes = { routes } />  
  </Provider>
  , document.querySelector('.container'));
