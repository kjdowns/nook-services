import React, { Component } from 'react'
import {connect} from 'react-redux'
import IslandCard from '../components/IslandCard'

class IslandContainer extends Component {

    renderIslands = () => {
        return (
            this.props.islands.map(island => (
                <IslandCard key={island.id} name={island.name} rate={island.rate} description={island.description} url={island.url} />
        ))
        )
    }

    render(){
        return(
            <div>
                {this.renderIslands()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {islands: state.islands}
}

export default connect(mapStateToProps) (IslandContainer)