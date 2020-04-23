import React, { Component } from "react";

class TurnipSpike extends Component {

    render(){
        return (
            <>
                <h2>{this.props.type}</h2>
                <img alt={this.props.type} src={this.props.url} />
            </>
        )
    }

}

export default TurnipSpike