import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import './App.css';
import NotFound from './components/NotFound';
import ProfilePageLoader from './components/ProfilePageLoader';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => (
            <ProfilePage {...props} userId="Boone-11892" />
          )}/>
          <Route path='/profile/:id' component={ProfilePageLoader} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}