import React, { Component } from 'react';
import Profile from './Profile';
import Header from './common/Header';

export default class ProfilePage extends Component {
  render() {
    console.log("Props ID: " + this.props.userId);

    return (
      <div>
        <Header />
        <div className="grid">
          <Profile userId={this.props.userId} />
        </div>
      </div>
    );
  }
}