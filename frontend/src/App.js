import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import HeaderBar from './components/HeaderBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import history from './history'
/* 
Created seperate history object for programatic rerouting throughtout application
and then passed into Router component
*/

import './App.css';

function App() {
  return (
    <div>
      <Router history={history}>
          < HeaderBar/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
