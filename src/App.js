import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProfilePage from './components/Profile/ProfilePage';
import ProfilePageContainer from './components/Profile/ProfilePageContainer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={props => (
            <ProfilePage {...props} userId={'Boone-11892'} gameMode={'Quickplay'} />
          )}/>
          <Route path='/profile/:id' component={ProfilePageContainer} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}