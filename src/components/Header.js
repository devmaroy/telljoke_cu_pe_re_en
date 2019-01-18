import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header container">
        <h1 className="header__title">Tell Joke</h1>
        <NavLink to="/" className="header__nav-link" activeClassName='is-active' exact={ true }>Home</NavLink>
        <NavLink to="/about" className="header__nav-link" activeClassName='is-active'>About</NavLink>
        <NavLink to="/contact" className="header__nav-link" activeClassName='is-active'>Contact</NavLink>
    </div>
);

export default Header;