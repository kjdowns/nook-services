import React, { Component } from 'react'
import FishContainer from './containers/FishContainer'

class Fish extends Component {

    render(){
        return(
            <div>
                <h1>Fish Page</h1>
                <FishContainer />
            </div>
        )
    }
}

export default Fish