import React, { Component } from 'react'
import BugContainer from '../containers/BugContainer'

class Bugs extends Component {

    render(){
        return(
            <div>
                <h1>Bug Page</h1>
                <BugContainer/>
            </div>
        )
    }
}

export default Bugs