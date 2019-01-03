import { string } from 'prop-types';
import React, { Component } from 'react';
import './SimpleStat.css';

export default class SimpleStatList extends Component {
    render() {
        return (
            <div className="simple-stat">
                <div className="simple-stat-title">{this.props.stat}</div>
                <div className="simple-stat-value">{this.props.value}</div>
            </div>
        )
    }
}

SimpleStatList.propTypes = {
    stat: string,
    value: string
}
