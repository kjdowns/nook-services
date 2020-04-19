import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bugData} from '../data'
import BugCard from '../components/BugCard'

class BugContainer extends Component {

    renderBugs = () => {
        if (this.props.loggedIn) {
            return this.renderBugsFromUser();
        } else {
            return this.renderBugsFromData();
        }
    }

    renderBugsFromData = () => {
        return (
            bugData.map(bug => (
                <BugCard key={bug.name} name={bug.name} location={bug.location} time={bug.time} northMonths={bug.northMonths.join(", ")} southMonths={bug.southMonths.join(", ")} url={bug.url} />
            ))
        )
    }

    renderBugsFromUser = () => {
        return (
            this.props.bugs.map(bug => (
                <BugCard key={bug.id} name={bug.name} location={bug.location} time={bug.time} northMonths={bug.months_north} southMonths={bug.months_south} url={bug.url} />
            ))
        )
    }
    
    render(){
        return(
            <div>
                {this.renderBugs()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        bugs: state.user.bugs
    }
}

export default connect(mapStateToProps) (BugContainer)