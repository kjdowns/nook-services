import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fishData} from '../data'
import FishCard from '../components/FishCard'

class FishContainer extends Component {

    renderFish = () => {
        if (this.props.loggedIn) {
            return this.renderFishFromUser();
        } else {
            return this.renderFishFromData();
        }
    }

    renderFishFromData = () => {
        return (
            fishData.map(fish => (
                <FishCard key={fish.name} name={fish.name} location={fish.location} time={fish.time} northMonths={fish.northMonths.join(", ")} southMonths={fish.southMonths.join(", ")} url={fish.url} />
            ))
        )
    }

    renderFishFromUser = () => {
        return (
            this.props.fish.map(fish => (
                <FishCard key={fish.id} name={fish.name} location={fish.location} time={fish.time} northMonths={fish.northMonths} southMonths={fish.southMonths} url={fish.url} />
            ))
        )
    }
    
    render(){
        return(
            <div>
                {this.renderFish()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        fish: state.user.fish
    }
}

export default connect(mapStateToProps) (FishContainer)