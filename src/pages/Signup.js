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
    }

    render(){
        return(
            <div>
                <h1>Signup Page</h1>
                <form>
                    <div>
                        <label>Username: </label>
                        <input type="text" name="username" value={this.state.username}/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" value={this.state.password}/>
                    </div>
                    <div>
                        <label>Confirm: </label>
                        <input type="password" name="passwordConfirm" value={this.state.passwordConfirm}/>
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