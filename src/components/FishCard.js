import React, { Component } from 'react'

class FishCard extends Component {

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
                            <td><img src={this.props.url} style={{backgroundColor: 'grey'}} height="64" width="64" className="unclicked" onClick={this.handleClick}/></td>
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

export default FishCard