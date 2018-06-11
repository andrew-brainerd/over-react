import React, { Component } from 'react';
import Profile from './components/Profile';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="profileList grid randomBackground">
        {/* <Profile userId="HunkuChunku-2221" /> */}
        <Profile userId="Boone-11892" />
        {/* <Profile userId="Thristy-1451" /> */}
        {/* <Profile userId="Smeedge-1302" /> */}
        {/* <Profile userId="hscooby249-1171" /> */}
      </div>
    );
  }
}