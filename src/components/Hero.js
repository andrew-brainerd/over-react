import React from 'react';
import '../css/Hero.css';

const Hero = (props) => {
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

export default Hero;
