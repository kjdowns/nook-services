import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Login extends Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            logInSuccess: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: '',
            password: '',
            logInSuccess: true
        })
    }

    render(){
        if (this.state.logInSuccess) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h1>Login Page</h1>
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

export default Login