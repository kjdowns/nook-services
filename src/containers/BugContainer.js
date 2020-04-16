import React, { Component } from 'react'
import {bugData} from '../data'
import BugCard from '../components/BugCard'

class BugContainer extends Component {
    
    render(){
        return(
            <div>
                {bugData.map(bug => (
                    <BugCard name={bug.name} location={bug.location} time={bug.time} northMonths={bug.northMonths} southMonths={bug.southMonths} url={bug.url} />
                ))}
            </div>
        )
    }

}

export default BugContainer