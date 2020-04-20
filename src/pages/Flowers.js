import React, { Component } from 'react'
import {flowerIcons} from '../data'

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
                    <h2>Cosmos</h2>
                    <img src={flowerIcons.cosmos.red} />
                    <img src={flowerIcons.cosmos.yellow} />
                    <img src={flowerIcons.cosmos.white} />
                    <img src={flowerIcons.cosmos.orange} />
                    <img src={flowerIcons.cosmos.pink} />
                    <img src={flowerIcons.cosmos.black} />
                </div>
                <div>
                    <h2>Roses</h2>
                    <img src={flowerIcons.roses.red} />
                    <img src={flowerIcons.roses.yellow} />
                    <img src={flowerIcons.roses.white} />
                    <img src={flowerIcons.roses.orange} />
                    <img src={flowerIcons.roses.pink} />
                    <img src={flowerIcons.roses.black} />
                    <img src={flowerIcons.roses.purple} />
                    <img src={flowerIcons.roses.blue} />
                    <img src={flowerIcons.roses.gold} />
                </div>
                <div>
                    <h2>Tulips</h2>
                    
                </div>
                <div>
                    <h2>Pansies</h2>
                    
                </div>
                <div>
                    <h2>Lilies</h2>
                    
                </div>
                <div>
                    <h2>Windflowers</h2>
                    
                </div>
                <div>
                    <h2>Hyacinths</h2>
                    
                </div>
                <div>
                    <h2>Mums</h2>
                    
                </div>
            </div>
        )
    }

}

export default Flowers;