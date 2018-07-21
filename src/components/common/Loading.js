import React, { Component } from 'react';
import loader from '../../img/loading_simple_blue.png';
import '../../css/Loading.css';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img src={loader} alt={this.props.altText} />
            </div>
        );
    }
}