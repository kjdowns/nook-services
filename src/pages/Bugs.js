import React from 'react'

import BugContainer from '../containers/BugContainer'

const Bugs = () => {

        return(
            <div className="bug-page-wrapper">
                <h1>Bug Services</h1>
                <p>
                    Welcome to bug services! Here you can view all of the available bugs and thier capture details.
                    Clicking on the icon will allow you to mark bugs as caught or not caught, and logging in with an account
                    will allow you to save those details.
                </p>
                <BugContainer/>
            </div>
        )
    }

export default Bugs