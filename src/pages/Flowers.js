import React, { Component } from 'react'
import {flowerIcons, cosmos, roses, tulips, pansies, lilies, windflowers, mums, hyacinths} from '../data'
import FlowerCard from '../components/FlowerCard'

class Flowers extends Component {
    
    render(){

        return (
            <div className="flower-page">
                <div>
                    <h1>Flower Services</h1>
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
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.cosmos.black} /> <br/> Black </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Roses"} colors={roses} />
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
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.black} /> <br/> Black </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.purple} /> <br/> Purple </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.black} /> <br/> Black </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.purple} /> <br/> Purple </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red <br/> (Hybrid) </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.red} /> <br/> Red <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.blue} /> <br/> Blue </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.roses.black} /> <br/> Black </td>
                                    <td><img alt="flower icon" src={flowerIcons.wateringCan} /> <br/> Gold Can </td>
                                    <td><img alt="flower icon" src={flowerIcons.roses.gold} /> <br/> Gold </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Tulips"} colors={tulips} />
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
                                    <td><img alt="flower icon" src={flowerIcons.tulips.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.black} /> <br/> Black </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.tulips.purple} /> <br/> Purple </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Pansies"} colors={pansies} />
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
                                    <td><img alt="flower icon" src={flowerIcons.pansies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.blue} /> <br/> Blue </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.blue} /> <br/> Blue </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.red} /> <br/> Red <br/> (Hybrid) </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.red} /> <br/> Red <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.red} /> <br/> Red <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.pansies.purple} /> <br/> Purple </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Lilies"} colors={lilies} />
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
                                    <td><img alt="flower icon" src={flowerIcons.lilies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.black} /> <br/> Black </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.lilies.pink} /> <br/> Pink </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Windflowers"} colors={windflowers} />
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
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.blue} /> <br/> Blue </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.blue} /> <br/> Blue </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.red} /> <br/> Red <br/> (Hybrid) </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.pink} /> <br/> Pink </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.blue} /> <br/> Blue </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.red} /> <br/> Red <br/> (Hybrid) </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.pink} /> <br/> Pink </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.blue} /> <br/> Blue </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.pink} /> <br/> Pink <br/> (Hybrid) </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.red} /> <br/> Red <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.red} /> <br/> Red <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.purple} /> <br/> Purple </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.red} /> <br/> Red <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.pink} /> <br/> Pink <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.purple} /> <br/> Purple </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.pink} /> <br/> Pink <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.pink} /> <br/> Pink <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.windflowers.purple} /> <br/> Purple </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Hyacinths"} colors={hyacinths} />
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
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.orange} /> <br/> Orange </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.blue} /> <br/> Blue </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.orange} /> <br/> Orange </td>
                                    <td><img alt="flower icon" src={flowerIcons.hyacinths.purple} /> <br/> Purple </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <FlowerCard name={"Mums"} colors={mums} />
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
                                    <td><img alt="flower icon" src={flowerIcons.mums.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.pink} /> <br/> Pink </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.mums.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.white} /> <br/> White </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.purple} /> <br/> Purple </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.mums.red} /> <br/> Red </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.yellow} /> <br/> Yellow </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.yellow} /> <br/> Yellow <br/> (Hybrid) </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.mums.yellow} /> <br/> Yellow <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.yellow} /> <br/> Yellow <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" height="30" width="30" src={flowerIcons.mums.green} /> <br/> Green </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.mums.yellow} /> <br/> Yellow <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.yellow} /> <br/> Yellow <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.purple} /> <br/> Purple <br/> (Hybrid) </td>
                                </tr>
                                <tr>
                                    <td><img alt="flower icon" src={flowerIcons.mums.purple} /> <br/> Purple <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" src={flowerIcons.mums.purple} /> <br/> Purple <br/> (Hybrid) </td>
                                    <td><img alt="flower icon" height="30" width="30" src={flowerIcons.mums.green} /> <br/> Green </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <footer>
                    Note: This data was datamined by Aeter & Paleh. Tables based on visual guide made by peach-n-key
                </footer>
            </div>
        )
    }

}

export default Flowers;