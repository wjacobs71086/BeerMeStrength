import React from 'react'
import {Beer} from './Beer'

export const Favorites = (props) => {
// iterate through the props of beers and generate a beer card for any marked as true

    return (
        <div>
            <h3>This is a list of my favorite beers</h3>
                <ul>
                {(props.beers) ? props.beers.map(beer => {
                    return (beer.fav) ? <Beer 
                                            key={beer.id}
                                            name={beer.name}
                                            rating={beer.rating}
                                            price={beer.price}
                                        /> : null
                    }): null}
                </ul>
        </div>
    )
}
