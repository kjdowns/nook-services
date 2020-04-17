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

    }

}

export default Signup;