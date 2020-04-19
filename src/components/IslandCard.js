import React, { Component} from 'react'

class IslandCard extends Component {

    render(){
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name </th>
                        <th>Encouter Rate </th>
                        <th>Map </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.rate}</td>
                        <td><img src={this.props.url} height="120" width="120" /></td>
                    </tr>
                    </tbody>
                </table>
                <p>{this.props.description}</p>
            </div>
        )
    }

}

export default IslandCard;