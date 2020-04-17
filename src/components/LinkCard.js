import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LinkCard extends Component {

    render(){
        return (
            <div className={ this.props.name + "-card"}>
                <Link> to={this.props.path} {this.props.name}</Link>
            </div>
        )
    }
}

export default LinkCard;