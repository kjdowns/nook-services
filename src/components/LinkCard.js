import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LinkCard extends Component {

    capitalizeString(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    render(){
        return (
            <div className="link-card">
                <Link to={"/" + this.props.name}> <img src={this.props.url} className="service-icon" /><br/>{this.capitalizeString(this.props.name)}</Link>
            </div>
        )
    }
}

export default LinkCard;