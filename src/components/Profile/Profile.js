import { string } from 'prop-types';
import React, { Component } from 'react';
import { getProfile } from '../../api/Profile';
import Loader from '../common/Loading';
import './Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            level: null,
            levelString: null,
            portrait: null,
        }
    }

    componentDidMount() {
        getProfile(this.props.userId)
            .then(profile => this.refresh(profile))
            .catch(err => console.log(err));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userId !== nextProps.userId) {
            getProfile(nextProps.userId)
                .then(profile => this.refresh(profile))
                .catch(err => console.log(err));
        }
    }

    refresh(profile) {
        this.setState({
            username: profile.info.username,
            level: profile.info.level,
            levelString: `Lvl ${profile.info.level}`,
            portrait: profile.info.portrait
        });
    }

    render() {
        return (
            <div className="player-profile">
                <div className="player-portrait">
                    { this.state.portrait ?
                        <img src={this.state.portrait} alt="Player Profile" /> : 
                        <Loader altText="Player Portrait" />
                    }
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

Profile.propTypes = {
    userId: string.isRequired
}
