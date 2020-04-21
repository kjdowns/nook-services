import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updateBug, fetchUser } from '../actions/userActions'

class BugCard extends Component {

    handleClick = event => {
        let checked;
        if (event.target.className === "clicked") {
            event.target.style = "background-color:grey"
            event.target.className = "unclicked"
            checked = false;
        } else {
            event.target.style = "background-color:green"
            event.target.className = "clicked"
            checked = true;
        }
        if (this.props.loggedIn) {
            this.props.updateBug({id: this.props.id, checked: checked})
        }
    }

    setStyle = () => {
        if (this.props.loggedIn) {
            if (this.props.checked) {
                return (
                    {backgroundColor: 'green'}
                )
            } else {
                return (
                    {backgroundColor: 'grey'}
                )
            }
        } else {
            return (
                {backgroundColor: 'grey'}
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
                            <td><img src={this.props.url} style={this.setStyle()} height="64" width="64" className="unclicked" onClick={this.handleClick}/></td>
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
        updateBug: (bugData) => dispatch(updateBug(bugData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (BugCard)