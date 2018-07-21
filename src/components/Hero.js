import React, { Component } from 'react';
import '../css/Hero.css';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero-image">
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <div>
                    <div className="hero-name">{this.props.name}</div>
                    <div className="hero-time">{this.props.time}</div>
                </div>
            </div>
        );
    }
}