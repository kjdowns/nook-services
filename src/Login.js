import React, { Component } from 'react'

class Login extends Component {

    render(){
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <div>
                        <label>Username: </label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" />
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