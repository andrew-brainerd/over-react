import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/profile/Smeedge-1302" activeClassName="active">Collin</NavLink>
            {" | "}
            <NavLink to="/profile/hscooby249-1171" activeClassName="active">Alex</NavLink>
            {" | "}
            <NavLink to="/profile/Thristy-1451" activeClassName="active">Kurtis</NavLink>
            {" | "}
            <NavLink to="/profile/Boone-11892" activeClassName="active">Andy</NavLink>
        </nav>
    );  
};

export default Header;
