import React, { Component } from 'react'
import {connect} from 'react-redux';
import {updateFish} from '../actions/creatureActions'

class FishCard extends Component {

    handleClick = event => {
        let checked;
        if (event.target.className === "clicked") {
            event.target.className = "unclicked"
            checked = false;
        } else {
            event.target.className = "clicked"
            checked = true;
        }
        if (this.props.loggedIn) {
            this.props.updateFish({id: this.props.id, checked: checked})
        }
    }

    setClassName = () => {
        if (this.props.loggedIn) {
            if (this.props.checked) {
                return (
                    "clicked"
                )
            } else {
                return (
                    "unclicked"
                )
            }
        } else {
            return (
                "unclicked"
            )
        }
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th> Name </th>
                            <th> Location </th>
                            <th> Time </th>
                            <th> Months (Northern) </th>
                            <th> Months (Southern) </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={this.props.url} alt={this.props.name} id="creature-icon" className={this.setClassName()} onClick={this.handleClick}/></td>
                            <td> {this.props.name} </td>
                            <td> {this.props.location} </td>
                            <td> {this.props.time} </td>
                            <td> {this.props.northMonths} </td>
                            <td> {this.props.southMonths} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {loggedIn: state.loggedIn}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFish: (fishData) => dispatch(updateFish(fishData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FishCard)