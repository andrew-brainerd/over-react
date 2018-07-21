import React, { Component } from 'react';
import OverwatchSelect from './OverwatchSelect';
import '../css/OverwatchSelect.css';

export default class OverwatchSelectContainer extends Component {
    constructor(props) {
        super(props);

        this.options = [
            "something",
            "something else",
            "more something"
        ];

        this.label = "Options";
    }

    render() {
        return <div className="overwatch-select-container">
            <OverwatchSelect options={this.options} label={this.label} />
        </div>
    }
}