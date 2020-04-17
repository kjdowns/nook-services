import React, { Component } from 'react'
import LinkCard from '../components/LinkCard'

class LinkContainer extends Component {
    
    render (){
        return (
            <div className="link-container">
                <LinkCard name={"bugs"} />
            </div>
        )
    }

}

export default LinkContainer;