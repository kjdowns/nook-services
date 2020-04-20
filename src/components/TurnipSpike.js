import { Component } from "react";

class TurnipSpike extends Component {

    render(){
        return (
            <div>
                <h2>{this.props.type}</h2>
                <img src={this.props.url} />
            </div>
        )
    }

}

export default TurnipSpike