import React, { Component } from 'react';
import OverwatchSelect from 'overwatch-settings-select';
import '../css/StatControls.css';

export default class StatControls extends Component {
    constructor(props) {
        super(props);

        this.gameModes = [
            "Quickplay",
            "Competitive"
        ];
            
        this.statTypes = [
            "Top Heroes"
        ];

        this.state = {
            gameModeIndex: 0,
            statTypeIndex: 0
        }
    }

    getGameModeOptionText = (optionIndex) => {
        let validIndex = (optionIndex <= this.gameModes.length);
        let currentIndex = (optionIndex === this.state.gameModeIndex);

        if (validIndex && !currentIndex) {
            this.setState({
                gameModeIndex: optionIndex
            });

            this.props.gameModeChange(this.gameModes[optionIndex]);
            return this.gameModes[optionIndex];
        }

        return null;
    }

    getStatTypeOptionText = (optionIndex) => {
        let validIndex = (optionIndex <= this.statTypes.length);
        let currentIndex = (optionIndex === this.state.statTypeIndex);

        if (validIndex && !currentIndex) {
            this.setState({
                statTypeIndex: optionIndex
            });

            this.props.statTypeChange(this.statTypes[optionIndex]);
            return this.statTypes[optionIndex];
        }

        return null;
    }

    render() {
        return (
            <div className="stat-controls">
            <div className="stat-control-container">
                <OverwatchSelect 
                    selectedIndex={this.state.gameModeIndex}
                    onChange={this.getGameModeOptionText}
                    options={this.gameModes}
                />
            </div>
            <div className="stat-control-container right">
                <OverwatchSelect 
                    selectedIndex={this.state.statTypeIndex}
                    onChange={this.getStatTypeOptionText}
                    options={this.statTypes}
                />
            </div>
            </div>
        );
    }
}