import React, { Component } from 'react'
import { connect } from 'react-redux'

import IslandContainer from '../containers/IslandContainer'
import { fetchIslands } from '../actions/islandActions'

class MysteryIsland extends Component {

    componentDidMount(){
        this.props.islands.length === 0 && this.props.fetchIslands()
      }

    render(){
        return(
            <div className="island-page">
                <h1>Mystery Island Tours</h1>
                <p>
                    Mystery Island Tours allow you to visit random uncharted islands. They provide an additional way
                    to gather crafting materials, as well as opportunities to collect rare fish and bugs, non-native fruit trees,
                    and hybrid flowers. Accessing the island requires a Nook Miles Ticket, which can be purchased from the Nook Stop 
                    in Resident Services for 2,000 Nook Miles. There are exactly 20 unique island layouts
                </p>
                <IslandContainer />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {islands: state.islands}
}

const mapDispatchToProps = dispatch => {
    return {fetchIslands: () => {dispatch(fetchIslands())}}
}

export default connect(mapStateToProps,mapDispatchToProps) (MysteryIsland)