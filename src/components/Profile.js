import React, { Component } from 'react';
import { hostname } from '../config/server'
import Loader from './common/Loading';
import '../css/Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            level: null,
            levelString: null,
            portrait: <Loader altText="Player Portrait" />,
            userId: this.props.userId,
        }
    }

    componentDidMount() {
        this.getProfile(this.props.userId)
            .then(res => this.setState({ 
                username: res.info.username,
                level: res.info.level,
                levelString: `Lvl ${res.info.level}`,
                portrait: res.info.portrait
            }))
            .then(() => {
                this.setState({
                    userId: this.props.userId
                })
            })
            .catch(err => console.log(err));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userId !== nextProps.userId) {
            this.getProfile(nextProps.userId)
                .then(res => this.setState({ 
                    username: res.info.username,
                    level: res.info.level,
                    levelString: `Lvl ${res.info.level}`,
                    portrait: res.info.portrait
                }))
                .then(() => {
                    this.setState({
                        userId: nextProps.userId
                    })
                })
                .catch(err => console.log(err));
        }
    }

    getProfile = async(userId) => {
        console.log(`Getting User Profile for ${userId}`);

        const response = await fetch(`${hostname}/api/profile/${userId}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(`Failed to fetch user profile | ${body.message}`);
        }

        return body;
    }
    
    render() {
        return (
            <div className="player-profile">
                <div className="player-portrait">
                    <img src={this.state.portrait} alt="Player Profile" />
                </div>
                <div className="player-info">
                    <div className="player-name">{this.state.username}</div>
                    <div className="player-level">{this.state.levelString}</div>
                </div>
                <div className="player-stats-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}