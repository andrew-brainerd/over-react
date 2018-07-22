import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';
import Profile from './Profile';
import StatControls from './StatControls';
import Stats from './Stats';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameMode: "Quickplay",
            statType: null,
            resultCount: "5"
        }
    }

    getNewGameModeStats = (newGameMode) => {
        this.props.dispatch(
            profileActions.updateGameMode(newGameMode)
        );
    }

    getNewStatTypeStats = (newStatType) => {
        this.setState({
            statType: newStatType
        });
    }

    render() {
        return (
            <div>
                <div className="player-profile-container">
                    <Profile userId={this.props.userId}>
                        <StatControls 
                            gameModeChange={this.getNewGameModeStats}
                            statTypeChange={this.getNewStatTypeStats}
                        />
                        <Stats 
                            userId={this.props.userId} 
                            gameMode={this.props.gameMode}
                            statType={this.state.statType}
                            count={this.state.resultCount} 
                        />
                    </Profile>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gameMode: state.profile.gameMode
    };
}

export default connect(mapStateToProps)(ProfilePage);