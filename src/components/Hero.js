import React, { Component } from 'react';
import '../css/Hero.css';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="heroImage">
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <div>
                    <div className="heroName">{this.props.name}</div>
                    <div className="heroTime">{this.props.time}</div>
                </div>
            </div>
        );
    }
}