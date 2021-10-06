import React from 'react'
import {Beer} from './Beer'

export const MyBeers = (props) => {
    
    return (
        <div className='beerListContainer'>
                {(props.beers.beerList) ? props.beers.beerList.map(beer => {
                    return ( <Beer 
                                identifier={beer.id}
                                key={beer.id}
                                name={beer.name}
                                rating={beer.rating}
                                price={beer.price}/> 
                )}) : null}
        </div>
    )
}
