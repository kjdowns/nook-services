import React, { Component } from 'react'

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
        const {history} = this.props
        this.setState({
            username: '',
            password: '',
            passwordConfirm: ''
        })
        history.push('/')
    }

    render(){
        return(
            <div>
                <h1>Signup Page</h1>
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

export default Signup;