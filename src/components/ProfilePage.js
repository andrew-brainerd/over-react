import React, { Component } from 'react';
import Profile from './Profile';

export default class ProfilePage extends Component {
  render() {
    console.log("Props ID: " + this.props.userId);

    return (
        <div className="grid">
            <Profile userId={this.props.userId} />
        </div>
    );
  }
}