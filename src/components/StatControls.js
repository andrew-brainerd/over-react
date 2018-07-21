import React, { Component } from 'react';
import Stats from './Stats';
import OverwatchSelect from './OverwatchSelect'
import '../css/StatControls.css';

export default class StatControls extends Component {
    constructor(props) {
        super(props);

        this.options = [
            "Top Heroes",
            "Other option 1",
            "Other option 2",
            "Other option 3"
        ];

        this.label = null;
    }

    getOptionText = (optionIndex) => {
        if (optionIndex <= this.options.length && optionIndex !== 0) {
            return this.options[optionIndex];
        }

        return null;
    }

    render() {
        return (
            <div className="overwatch-select-container">
                <OverwatchSelect 
                    options={this.options} 
                    label={this.label} 
                    getOptionText={this.getOptionText} 
                />
            </div>
        );
    }
}