import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createUser, throwError } from '../actions/userActions'
import { bugData, fishData } from '../data'

class Signup extends Component {

    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            passwordConfirm: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.passwordConfirm) {
            this.props.createUser({username: this.state.username, password: this.state.password, bugs: bugData, fish: fishData})
        } else {
            let message = "Passwords do not match"
            this.props.throwError(message);
        }
        this.setState({
            username: '',
            password: '',
            passwordConfirm: ''
        })
    }

    ifErrorsShowMessage = () => {
        if (this.props.message !== "") {
            return <h3 className="error">{this.props.message}</h3>
        }
    }

    redirectToHome = () => {
        if (this.props.loggedIn) {
            return <Redirect to="/" />
        }
    }

    render(){
        return(
            <div className="signup-page">
                {this.redirectToHome()}
                <h1>Signup Page</h1>
                {this.ifErrorsShowMessage()}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: </label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Confirm: </label>
                        <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Signup"/>
                    </div>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        message: state.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (userData) => dispatch(createUser(userData)),
        throwError: (message) => dispatch(throwError(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)