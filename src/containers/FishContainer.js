import React, { Component } from 'react'
import {fishData} from '../data'
import FishCard from '../components/FishCard'

class FishContainer extends Component {
    
    render(){
        return(
            <div>
                <FishCard/>
            </div>
        )
    }

}

export default FishContainer