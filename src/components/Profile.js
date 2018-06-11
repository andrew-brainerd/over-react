import React, { Component } from 'react';
import Stats from './Stats';
import '../css/Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            level: null,
            portrait: null,
            userId: this.props.userId
        }

        this.hostname = "https://over-react-backend.herokuapp.com";
        this.hostname = "http://localhost:5000";
    }

    componentDidMount() {
        console.log('Profile componentDidMount with ' + this.props.userId);

        this.getProfile(this.props.userId)
            .then(res => this.setState({ 
                username: res.info.username,
                level: res.info.level,
                portrait: res.info.portrait
            }))
            .then(() => {
                console.log("Setting state userId to " + this.props.userId);
                this.setState({
                    userId: this.props.userId
                })
            })
            .then(console.log("State UserId: " + this.state.userId))
            .catch(err => console.log(err));
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        console.log("Next: ", nextProps);

        this.getProfile(nextProps.userId)
            .then(res => this.setState({ 
                username: res.info.username,
                level: res.info.level,
                portrait: res.info.portrait,
                userId: nextProps.userId
            }))
            .then(console.log("State UserId: " + this.state.userId))
            .catch(err => console.log(err));
    }

    getProfile = async(userId) => {
        console.log('Getting User Profile for ' + userId);

        const response = await fetch(this.hostname + '/api/profile/' + userId);
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
                    <Stats userId={this.state.userId} gameMode="Quickplay" count='3' />
                    <Stats userId={this.state.userId} gameMode="Competitive" count='3' />
                </div>
            </div>
        );
    }
}