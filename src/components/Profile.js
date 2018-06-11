import React, { Component } from 'react';
import Stats from './Stats';
import '../css/Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            level: null,
            portrait: null
        }
    }

    componentDidMount() {
        this.getProfile()
            .then(res => this.setState({ 
                username: res.info.username,
                level: res.info.level,
                portrait: res.info.portrait
            }))
            .catch(err => console.log(err));
    }

    getProfile = async() => {
        console.log('Getting User Profile');

        const response = await fetch('/api/profile/' + this.props.userId);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error('Failed to fetch user profile | ' + body.message);
        }

        console.log(body);

        return body;
    }
    
    render() {
        return (
            <div className="playerProfile">
                <div className="playerPortrait">
                    <img src={this.state.portrait} alt="Player Profile" />
                </div>
                <div className="playerInfo">
                    <div className="playerName">{this.state.username}</div>
                    <div className="playerLevel">Lvl {this.state.level}</div>
                </div>
                <div className="playerStatsContainer">
                    <Stats userId={this.props.userId} gameMode="Quickplay" count='3' />
                    <Stats userId={this.props.userId} gameMode="Competitive" count='3' />
                </div>
            </div>
        );
    }
}