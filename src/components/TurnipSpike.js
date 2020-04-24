import React from "react";

const TurnipSpike = props => {

        return (
            <div className="turnip-spike">
                <h2>{props.type}</h2>
                <img className="spike-chart" alt={props.type} src={props.url} />
            </div>
        )
    }

export default TurnipSpike