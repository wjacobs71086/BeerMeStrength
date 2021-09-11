import React from 'react'
import {Beer} from './Beer'

export const MyBeers = (props) => {
    return (
        <div>
            <h3>This is a list of all my beers</h3>
                <ul>
                {(props.beers) ? props.beers.map(beer => {
                    return ( <Beer 
                                key={beer.id}
                                name={beer.name}
                                rating={beer.rating}
                                price={beer.price}/> 
                )}) : null}
                </ul>
        </div>
    )
}
