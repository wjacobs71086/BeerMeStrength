import React from 'react'
import {Beer} from './Beer'

export const MyBeers = (props) => {
    
    return (
        <div className='myBeerListContainer'>
            <h3>This is a list of all my beers</h3>
                <ul>
                {(props.beers.beerList) ? props.beers.beerList.map(beer => {
                    return ( <Beer 
                                identifier={beer.id}
                                key={beer.id}
                                name={beer.name}
                                rating={beer.rating}
                                price={beer.price}/> 
                )}) : null}
                </ul>
        </div>
    )
}
