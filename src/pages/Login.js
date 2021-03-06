import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import { fetchUser } from '../actions/userActions'


class Login extends Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchUser(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    redirectToHome = () => {
        if (this.props.loggedIn) {
            return <Redirect to="/" />
        }
    }

    ifErrorsShowMessage = () => {
        if (this.props.message !== "") {
            return <h3 className="error">{this.props.message}</h3>
        }
    }

    render(){

        return (
            <div className="login-page">
                {this.redirectToHome()}
                <h1>Login Page</h1>
                {this.ifErrorsShowMessage()}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: </label>
                        <input type="text" name="username" value={this.props.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" value={this.props.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
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

function mapDispatchToProps(dispatch){
    return {fetchUser: (username) => dispatch(fetchUser(username))}
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)