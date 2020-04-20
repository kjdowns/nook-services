import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => 
        <div>
            <NavLink to="/login" exact >Login </NavLink>
            <NavLink to="signup" exact>Signup </NavLink>
            <NavLink to="/" exact >Home </NavLink>
            <NavLink to="/bugs" exact >Bugs </NavLink>
            <NavLink to="/fish" exact >Fish </NavLink>
            <NavLink to="/islands" exact>Islands </NavLink>
            <NavLink to="/turnips" exact>Turnips </NavLink>
        </div>

export default Navbar;