import React, { Component } from 'react'

class BugCard extends Component {

    render(){
        return (
            <div>
                <img src={this.props.url}/>
                <h3>{this.props.name}</h3>
                <ul>
                    <li>Location: {this.props.location}</li>
                    <li>Time: {this.props.time}</li>
                    <li>Months (Northern): {this.props.northMonths.map(month => month)}</li>
                    <li>Months (Southern): {this.props.southMonths.map(month => month)}</li>
                </ul>
            </div>
        )
    }

}

export default BugCard