import React, { Component } from 'react'
import { connect } from 'react-redux'

import IslandContainer from '../containers/IslandContainer'
import { fetchIslands } from '../actions/islandActions'

class MysteryIsland extends Component {

    componentDidMount(){
        this.props.fetchIslands()
      }

    render(){
        return(
            <div>
                <h1>Island Page</h1>
                <IslandContainer />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {fetchIslands: () => {dispatch(fetchIslands())}}
}

export default connect(null,mapDispatchToProps) (MysteryIsland)