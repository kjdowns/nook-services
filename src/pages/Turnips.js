import React, { Component } from 'react'

class Turnips extends Component {

    render(){
        return(
            <div>
                <h1>Sow Joan's Stalk Market</h1>
                <div>
                    <img src="https://i1.wp.com/nintygamer.com/wp-content/uploads/2020/04/daisy-mae.jpg?w=700&ssl=1" />
                    <p>
                        Every Sunday from 4 AM to 12 PM, Daisy Mae will wander somewhere along your island. 
                        She spawns randomly and seems to walk all over the island, so you will have to search for her.
                        Daisy Mae sells turnips during this period for a variable price each week. Daisy’s price is 
                        calculated based on a random integer between 90 and 110. This is known as the Base Price. 
                        The base price of your turnips affects Timmy and Tommy's turnip purchase prices for the week.
                    </p>
                    <p>
                        Selling turnips is done through Nook's Cranny. Timmy and Tommy will buy turnips from you every day, 
                        except for Sundays, at a different price every morning (before 12pm) and every afternoon (12pm-10pm). 
                        Their price may be as low as 9 Bells, and as high as 660 Bells (600% of a Base Price of 110 bells). 
                        Time Travel has no effect on changing the price that week, however time traveling backwards in time 
                        will rot any turnips the player has purchased. Rotten turnips can be placed on the ground to attract 
                        ants and flies.
                    </p>
                    <p>
                        In New Horizons, the Stalk Market follows the 4 following patterns: Random, Large Spike, Decreasing, 
                        and Small Spike. Your pattern from the previous week will impact the likelihood of the following week's pattern.
                        <br />
                        <br />
                        The 4 patterns are as follows:
                    </p>
                </div>
            </div>
        )
    }
    
}

export default Turnips