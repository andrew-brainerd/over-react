import React, { Component } from 'react';
import Profile from './Profile';
import Stats from './Stats';

export default class ProfilePage extends Component {
    render() {
        console.clear();
        console.log(`Profile Page for User ID: ${this.props.userId}`);
        
        return (
            <div>
                <div className="grid">
                    <Profile userId={this.props.userId}>
                        <Stats userId={this.props.userId} gameMode="Quickplay" count='3' />
                        <Stats userId={this.props.userId} gameMode="Competitive" count='3' />
                    </Profile>
                </div>
            </div>
        );
    }
}