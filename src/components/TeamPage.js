import { string } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Stats from './Stats';
import '../css/TeamPage.css'

class TeamPage extends Component {
    constructor(props) {
        super(props);
        
        this.resultCount = 3;

        this.team = [
            'Bowerry-1227',
            'HunkuChunku-2221',
            'Boone-11892',
            'Jerms-11197',
            'Nift-11755',
            'awesomedog-11605',
            'Echo419-11891',
            'Thisword-1124'
        ];
    }

    render() {
        const teamProfiles = this.team.map(member => {
            return (
                <Profile key={member} userId={member}>
                    <Stats
                        userId={member}
                        gameMode={'Competitive'}
                        statType={this.props.statType}
                        count={this.resultCount}
                    />
                </Profile>
            );
        });

        return (
            <div className="team-container">
                {teamProfiles}
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

TeamPage.propTypes = {
    stateType: string
}

export default connect(mapStateToProps)(TeamPage);
