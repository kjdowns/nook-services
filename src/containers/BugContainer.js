import React, { Component } from 'react'
import {bugData} from '../data'
import BugCard from '../components/BugCard'

class BugContainer extends Component {

    renderBugsFromData = () => {
        return (
            bugData.map(bug => (
                <BugCard name={bug.name} location={bug.location} time={bug.time} northMonths={bug.northMonths} southMonths={bug.southMonths} url={bug.url} />
            ))
        )
    }

    renderBugsFromUser = () => {

    }
    
    render(){
        return(
            <div>
                {this.renderBugsFromData()}
            </div>
        )
    }

}

export default BugContainer