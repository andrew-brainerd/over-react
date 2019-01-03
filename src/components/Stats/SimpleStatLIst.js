import { array } from 'prop-types';
import React, { Component } from 'react';
import SimpleStat from './SimpleStat'
import './SimpleStatList.css';

export default class SimpleStatList extends Component {
    render() {
        const statList = this.props.list &&
            this.props.list.map(s => <SimpleStat key={s.title} stat={s.title} value={s.value} />);

        return <div className="simple-stat-list">{statList}</div>
    }
}

SimpleStatList.propTypes = {
    list: array
}
