import React, {Component} from 'react'
import {connect} from 'react-redux'

class IslandContainer extends Component {

    render(){
        return(
            <div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {islands: state.islands}
}

export default connect(mapStateToProps) (IslandContainer)