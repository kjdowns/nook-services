import React from 'react'

const IslandCard = props => {

        return(
            <div className="island-card">
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
                        <td>{props.name}</td>
                        <td>{props.rate}</td>
                        <td><img src={props.url} alt="island" height="120" width="120" /></td>
                    </tr>
                    </tbody>
                </table>
                <p>{props.description}</p>
            </div>
        )
    }

export default IslandCard;