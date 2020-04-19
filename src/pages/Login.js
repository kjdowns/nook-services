import React, { Component } from 'react'
import {connect} from 'react-redux'
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
        const {history} = this.props
        this.props.fetchUser(this.state.username)
        this.setState({
            username: '',
            password: '',
        })
        history.push('/')
    }

    render(){

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

function mapDispatchToProps(dispatch){
    return {fetchUser: (username) => dispatch(fetchUser(username))}
}

export default connect(null, mapDispatchToProps) (Login)