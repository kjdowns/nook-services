import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => 
        <div>
            <NavLink to="/login" exact >Login </NavLink>
            <NavLink to="/" exact >Home </NavLink>
            <NavLink to="/bugs" exact >Bugs </NavLink>
            <NavLink to="/fish" exact >Fish </NavLink>
        </div>

export default Navbar;