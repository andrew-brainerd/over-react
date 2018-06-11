import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import './App.css';

const ProfilePageLoader = ({ match }) => (
  <div className="statsPage">
    <ProfilePage userId={match.params.id} />
  </div>
)

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/profile/:id' component={ProfilePageLoader} />
        </Switch>
      </Router>
    );
  }
}