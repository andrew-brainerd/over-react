import { string, number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../../actions/profileActions';
import Profile from './Profile';
import StatControls from '../Stats/StatControls';
import Stats from '../Stats/Stats';

class ProfilePage extends Component {
    getNewGameModeStats = newGameMode => {
        this.props.dispatch(
            profileActions.updateGameMode(newGameMode)
        );
    }

    getNewStatTypeStats = newStatType => {
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

const mapStateToProps = state => ({
    gameMode: state.profile.gameMode,
    statType: state.profile.statType
});

ProfilePage.propTypes = {
    userId: string.isRequired,
    gameMode: string,
    statType: string,
    resultCount: number
}

export default connect(mapStateToProps)(ProfilePage);
