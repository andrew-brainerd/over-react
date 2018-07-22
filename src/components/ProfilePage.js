import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';
import Profile from './Profile';
import StatControls from './StatControls';
import Stats from './Stats';

class ProfilePage extends Component {
    getNewGameModeStats = (newGameMode) => {
        this.props.dispatch(
            profileActions.updateGameMode(newGameMode)
        );
    }

    getNewStatTypeStats = (newStatType) => {
        this.props.dispatch(
            profileActions.updateStatType(newStatType)
        );
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
                            statType={this.props.statType}
                            count={this.props.resultCount}
                        />
                    </Profile>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        gameMode: state.profile.gameMode,
        statType: state.profile.statType,
    };
}

export default connect(mapStateToProps)(ProfilePage);