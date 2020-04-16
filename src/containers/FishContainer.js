import React, { Component } from 'react'
import {fishData} from '../data'
import FishCard from '../components/FishCard'

class FishContainer extends Component {
    
    render(){
        return(
            <div>
                {fishData.map(fish => (
                    <FishCard name={fish.name} location={fish.location} time={fish.time} northMonths={fish.northMonths} southMonths={fish.southMonths} url={fish.url} />
                ))}
            </div>
        )
    }

}

export default FishContainer