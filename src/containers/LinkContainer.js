import React, { Component } from 'react'
import LinkCard from '../components/LinkCard'

class LinkContainer extends Component {
    
    render (){
        return (
            <div className="link-container">
                <LinkCard name={"bugs"} url={"https://vignette.wikia.nocookie.net/animalcrossing/images/8/83/NH-RedNet.png/revision/latest?cb=20200419235219"} />
                <LinkCard name={"fish"} url="https://vignette.wikia.nocookie.net/animalcrossing/images/0/07/12m9CFw.png/revision/latest?cb=20200414072219" />
                <LinkCard name={"flowers"} url="https://vignette.wikia.nocookie.net/animalcrossing/images/a/ad/NH-Watering_can.png/revision/latest/scale-to-width-down/60?cb=20200325182421" />
                <LinkCard name={"islands"} url="https://vignette.wikia.nocookie.net/animalcrossing/images/a/a0/Ddodo.JPG/revision/latest?cb=20200224033418" />
                <LinkCard name={"turnips"} url="https://vignette.wikia.nocookie.net/animalcrossing/images/b/b7/Turnip.png/revision/latest?cb=20100726212427" />
            </div>
        )
    }

}

export default LinkContainer;