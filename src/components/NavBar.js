import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

class Navbar extends Component {

    renderNavbar = () => {
        if (this.props.loggedIn) {
            return (
                <div className="navbar">
                    <NavLink to="/" exact >Home </NavLink>
                    <NavLink to="/bugs" exact >Bugs </NavLink>
                    <NavLink to="/fish" exact >Fish </NavLink>
                    <NavLink to="/flowers" exact >Flowers </NavLink>
                    <NavLink to="/islands" exact>Islands </NavLink>
                    <NavLink to="/turnips" exact>Turnips </NavLink>
                </div>
            )
        } else {
            return (
                <div className="navbar">
                    <NavLink to="/login" exact >Login </NavLink>
                    <NavLink to="signup" exact>Signup </NavLink>
                    <NavLink to="/" exact >Home </NavLink>
                    <NavLink to="/bugs" exact >Bugs </NavLink>
                    <NavLink to="/fish" exact >Fish </NavLink>
                    <NavLink to="/flowers" exact >Flowers </NavLink>
                    <NavLink to="/islands" exact>Islands </NavLink>
                    <NavLink to="/turnips" exact>Turnips </NavLink>
                </div>
            )
        }
    }

    render (){
        return (
            <>
            {this.renderNavbar()}
            </>
        )
    }
} 

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps) (Navbar)
                