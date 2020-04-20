import React, { Component } from 'react'
import {flowerIcons, cosmos, roses, tulips, pansies, lilies, windflowers, mums, hyacinths} from '../data'
import FlowerCard from '../components/FlowerCard'

class Flowers extends Component {
    
    render(){

        return (
            <div>
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
                </div>
                    <div>
                        <FlowerCard name={"Cosmos"} colors={cosmos} />
                        <table>
                            <thead>
                                <tr>
                                    <th> Parent 1 </th>
                                    <th> Parent 2 </th>
                                    <th> Hybrid Child </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={flowerIcons.cosmos.red} /> <br/> Red </td>
                                    <td><img src={flowerIcons.cosmos.yellow} /> <br/> Yellow </td>
                                    <td><img src={flowerIcons.cosmos.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img src={flowerIcons.cosmos.red} /> <br/> Red </td>
                                    <td><img src={flowerIcons.cosmos.white} /> <br/> White </td>
                                    <td><img src={flowerIcons.cosmos.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img src={flowerIcons.cosmos.orange} /> <br/> Orange </td>
                                    <td><img src={flowerIcons.cosmos.orange} /> <br/> Orange </td>
                                    <td><img src={flowerIcons.cosmos.black} /> <br/> Black </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Roses"} colors={roses} />
                        
                    </div>
                    
                    <FlowerCard name={"Tulips"} colors={tulips} />
                    <FlowerCard name={"Pansies"} colors={pansies} />
                    <FlowerCard name={"Lilies"} colors={lilies} />
                    <FlowerCard name={"Windflowers"} colors={windflowers} />
                    <FlowerCard name={"Hyacinths"} colors={hyacinths} />
                    <FlowerCard name={"Mums"} colors={mums} />
            </div>
        )
    }

}

export default Flowers;