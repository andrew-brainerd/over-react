import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/" activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to="/profile/Smeedge-1302" activeClassName="active">Collin</NavLink>
                {" | "}
                <NavLink to="/profile/hscooby249-1171" activeClassName="active">Alex</NavLink>
                {" | "}
                <NavLink to="/profile/Thristy-1451" activeClassName="active">Kurtis</NavLink>
            </nav>
        );
      }
    
};