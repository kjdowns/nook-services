import React, { Component } from 'react'

class BugCard extends Component {

    handleClick = event => {
        if (event.target.className === "clicked") {
            event.target.style = "background-color:grey"
            event.target.className = "unclicked"
        } else {
            event.target.style = "background-color:green"
            event.target.className = "clicked"
        }
    }

    render(){
        return (
            <div>
                <img src={this.props.url} style={{backgroundColor: 'grey'}} className="unclicked" onClick={this.handleClick}/>
                <h3>{this.props.name}</h3>
                <ul>
                    <li>Location: {this.props.location}</li>
                    <li>Time: {this.props.time}</li>
                    <li>Months (Northern): {this.props.northMonths}</li>
                    <li>Months (Southern): {this.props.southMonths}</li>
                </ul>
            </div>
        )
    }

}

export default BugCard