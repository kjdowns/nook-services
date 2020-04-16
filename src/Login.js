import React, { Component } from 'react'

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

    }

    render(){
        return (
            <div>
                <h1>Login Page</h1>
                <form>
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