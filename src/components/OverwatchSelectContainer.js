import React, { Component } from 'react';
import OverwatchSelect from './OverwatchSelect';
import '../css/OverwatchSelect.css';

export default class OverwatchSelectContainer extends Component {
    constructor(props) {
        super(props);

        this.options = [
            "-- Choose --",
            "something",
            "something else",
            "more something"
        ];

        this.label = "Options";
    }

    getOptionText = (optionIndex) => {
        if (optionIndex <= this.options.length && optionIndex !== 0) {
            return this.options[optionIndex];
        }

        return null;
    }

    render() {
        return <div className="overwatch-select-container">
            <OverwatchSelect 
                options={this.options} 
                label={this.label} 
                getOptionText={this.getOptionText} 
            />
        </div>
    }
}