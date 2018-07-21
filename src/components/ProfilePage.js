import React, { Component } from 'react';
import Profile from './Profile';
import StatControls from './StatControls';
import Stats from './Stats';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameMode: "Quickplay",
            statType: null,
            resultCount: "5"
        }
    }

    getNewGameModeStats = (newGameMode) => {
        this.setState({
            gameMode: newGameMode
        });
    }

    getNewStatTypeStats = (newStatType) => {
        this.setState({
            statType: newStatType
        });
    }

    render() {
        return (
            <div>
                <div className="profile-grid">
                    <Profile userId={this.props.userId}>
                        <StatControls 
                            gameModeChange={this.getNewGameModeStats}
                            statTypeChange={this.getNewStatTypeStats}
                        />
                        <Stats 
                            userId={this.props.userId} 
                            gameMode={this.state.gameMode}
                            statType={this.state.statType}
                            count={this.state.resultCount} 
                        />
                    </Profile>
                </div>
            </div>
        );
    }
}