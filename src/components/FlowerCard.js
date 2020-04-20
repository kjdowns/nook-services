import React, { Component } from 'react'

class FlowerCard extends Component {

    renderColorStrip = () => {
        return (
            <div>
            {this.props.colors.map(color => (
                    <img height="40" width="40" src={color} />
            ))}
            </div>
        )
    }

    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.name} are available in the colors below: </p>
                {this.renderColorStrip()}
                <p>
                    This chart outlines the most accurate breeding patterns for all available colors.
                    The chart assumes that base color flowers were grown from seeds, or in the case of
                    hybrid colors, bred from seed flowers. Flowers found on Mystery Island Tours or grown naturally
                    on a player's island may have different genetics and therefore may produce different results.
                </p>
            </div>
        )
    }

}

export default FlowerCard;