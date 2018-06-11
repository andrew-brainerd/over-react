import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/collin" activeClassName="active">Collin</NavLink>
            {" | "}
            <NavLink to="/alex" activeClassName="active">Alex</NavLink>
            {" | "}
            <NavLink to="/kurtis" activeClassName="active">Kurtis</NavLink>
        </nav>
    );
};

export default Header;