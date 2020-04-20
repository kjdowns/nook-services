import React, { Component } from 'react'
import {flowerIcons, cosmos} from '../data'
import FlowerCard from '../components/FlowerCard'

class Flowers extends Component {
    
    render(){

        return (
            <div>
                <h1>Flowers Page</h1>
                <p>
                    Flower seeds can be purchased from Nook's Cranny. They can be planted either by players or villagers, although 
                    some special flowers only occur when specific criteria are satisfied. Flowers will grow throughout the year. 
                    They serve a variety of purposes, such as attracting bugs and developing a perfect town status. 
                    They can also be placed in a house as furniture or be worn by the player. There are many different types of 
                    flowers and they come in a variety of colors. Players can develop hybrids of certain types of flowers 
                    through selective breeding. 
                </p>
                <div>
                    <FlowerCard name={"Cosmos"} colors={cosmos} />
                </div>
            </div>
        )
    }

}

export default Flowers;