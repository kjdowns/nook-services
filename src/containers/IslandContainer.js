import React, { Component } from 'react'
import {connect} from 'react-redux'
import IslandCard from '../components/IslandCard'

class IslandContainer extends Component {

    renderIslands = () => {
        return (
            <IslandCard />
        )
    }

    render(){
        return(
            <div>
                <IslandCard />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {islands: state.islands}
}

export default connect(mapStateToProps) (IslandContainer)