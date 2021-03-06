import { string } from 'prop-types';
import React from 'react';
import './Hero.css';

const Hero = props => {
    return (
        <div className="hero">
            <div className="hero-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <div className="hero-name">
                    {props.name}
                </div>
                <div className="hero-time">
                    {props.time}
                </div>
            </div>
        </div>
    );
}

Hero.propTypes = {
    image: string,
    name: string,
    time: string
}

export default Hero;
