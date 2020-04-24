import React, { Component } from "react";

class TurnipSpike extends Component {

    render(){
        return (
            <div className="turnip-spike">
                <h2>{this.props.type}</h2>
                <img className="spike-chart" alt={this.props.type} src={this.props.url} />
            </div>
        )
    }

}

export default TurnipSpike