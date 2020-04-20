import React, { Component } from 'react'
import TurnipSpike from '../components/TurnipSpike'

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
                <div>
                    <TurnipSpike type={"Random"} url="https://i2.wp.com/nintygamer.com/wp-content/uploads/2020/04/acnh-turnip-prices-random.png?resize=768%2C323&ssl=1" />
                    <p>
                        In a Random Pattern, your maximum profit will only ever be 140% of whatever your base price was. Your best bet here 
                        (if you don’t have any friends whose island you can visit) is to sell the moment it is higher than your buying price. 
                        Unless of course, RNG is not in your favor and during the Increasing Phase you always get 90% of your base price. 
                        But that likelihood is low. You are much more likely to either break even or make a semi-decent profit.
                    </p>
                </div>
                <div>
                    <TurnipSpike type={"Decreasing"} url={"https://i0.wp.com/nintygamer.com/wp-content/uploads/2020/04/acnh-turnip-prices-decreasing.png?resize=768%2C327&ssl=1"} />
                    <p>
                        This is the worst pattern of the four and if you find you are caught in this your best bet is to either sell immediately 
                        or find a friend and sell on their island. Every day you wait, you will lose more and more profit. Monday morning's price 
                        will be 85%-90% of your Base Rate and it will decrease 3%-5% each day.
                    </p>
                </div>
                <div>
                    <TurnipSpike type={"Small Spike"} url={"https://i0.wp.com/nintygamer.com/wp-content/uploads/2020/04/acnh-turnip-prices-camel-hump.png?resize=768%2C328&ssl=1"} />
                    <p>
                        This isn’t as exciting as the Large Spike pattern but you will be happy to be in this one as they share similarities. 
                        When the second phase of this pattern kicks in players can expect profit. This pattern contains three main phases:
                    </p>
                    <ul>
                        <li>
                            Decreasing Phase 1 (may not occur): 0-7 half-days in length. 
                            The Base rate is set to be 40%-90% of the original Base Rate, 
                            then decreasing 3%-5% every half-day of this phase.
                        </li>
                        <li>
                            Increasing Phase: always 5 half-days. Half-Day 1 & 2's Base Rate is set to be between 90% and 140%. 
                            For half-day 3-5, the Base Rate is set to be between 140% and 200%. All 3 of these days have the 
                            same potential earnings of anywhere between 1.4x and 2x your base price.
                        </li>
                        <li>
                            Decreasing Phase 2 (may not occur): the reminder of the week. Same as decreasing phase 1.
                        </li>
                    </ul>
                </div>
                <div>
                    <TurnipSpike type={"Large Spike"} url={"https://i1.wp.com/nintygamer.com/wp-content/uploads/2020/04/acnh-turnip-prices-big-spike.png?resize=768%2C330&ssl=1"} />
                    <p>
                        At first, this may look like a decreasing pattern. But keep an eye out! Remember that a decreasing pattern will keep decreasing 
                        every day. If at any point your decreasing pattern increases you may be looking at a large spike pattern. More importantly, if 
                        the 3rd half day after your first increase is greater than or equal to 2X your base price then you are definitely in a large 
                        spike. Keep a careful eye out for massive increases and remember that your third one is going to be the best one! This Pattern 
                        follows 4 phases in order:
                    </p>
                    <ul>
                        <li>
                            Steady Decreasing Phase: between 2 and 8 half days. The first half-day is 85%-90% of Base Price. Every half-day after 
                            is an additional decrease of 3%-5%.
                        </li>
                        <li>
                            Sharp Increasing Phase: always 3 half days. Half-day 1 is 90%-140% of Base Rate. Half-day 2 is 140%-200% of Base Rare. 
                            Half-Day 3 is 200%-600% of Base Rate.
                        </li>
                        <li>
                            Sharp Decreasing Phase: always 2 half days. Half-day 1 is 140%-200% of Base Rate. Helf-day 2 is 90%-140% of Base Rate
                        </li>
                        <li>
                            Random Decreasing Phase (may not occur): the remainder of the week every day to be 40%-90% of Base Rate.
                        </li>
                    </ul>
                </div>
                <footer>
                    This information was compiled by /u/Edricus with datamining by Ninji on April 1st, 2020. The doc on the original findings 
                    is <a href="https://docs.google.com/document/d/1bSVNpOnH_dKxkAGr718-iqh8s8Z0qQ54L-0mD-lbrXo/edit">here</a>.
                </footer>
            </div>
        )
    }
    
}

export default Turnips