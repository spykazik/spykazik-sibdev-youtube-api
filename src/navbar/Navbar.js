import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../img/sibdev-logo.png'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav>
            <div className="wrapper">
                <img src={Logo} alt="sibdev-logo"></img>
                <ul>
                    <NavLink className="nav-li" activeClassName='active-nav' exact to="/">Поиск</NavLink>
                    <NavLink className="nav-li" activeClassName='active-nav' to="/liked">Избранное</NavLink>
                </ul>
            </div>
            <div className="wrapper-right">
                <ul>
                    <NavLink className="nav-li" className="exit" activeClassName='active-nav' to="/exit">Выйти</NavLink>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;