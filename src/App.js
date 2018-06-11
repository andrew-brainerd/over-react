import React, { Component } from 'react';
import Profile from './components/Profile';
import './App.css';

export default class App extends Component {
  render() {
    console.log("Props ID: " + this.props.userId);

    return (
      <div className="profileList grid randomBackground">
        <Profile userId={this.props.userId} />
      </div>
    );
  }
}