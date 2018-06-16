import React, { Component } from 'react';
import loader from '../img/loading_simple_blue.png';
import '../css/Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            level: null,
            levelString: null,
            portrait: loader,
            userId: this.props.userId,
        }

        this.hostname = "https://over-react-backend.herokuapp.com";
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

        const response = await fetch(`${this.hostname}/api/profile/${userId}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(`Failed to fetch user profile | ${body.message}`);
        }

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
                    <div className="playerLevel">{this.state.levelString}</div>
                </div>
                <div className="playerStatsContainer">
                    {this.props.children}
                </div>
            </div>
        );
    }
}