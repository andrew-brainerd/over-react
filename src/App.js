import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import NotFound from './components/NotFound';
import ProfilePageContainer from './components/ProfilePageContainer';
import OverwatchSelect from './components/OverwatchSelectContainer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => (
            <ProfilePage {...props} userId="Boone-11892" />
          )}/>
          <Route path='/profile/:id' component={ProfilePageContainer} />
          <Route path='/select/' component={OverwatchSelect} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}