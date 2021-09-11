import React from 'react'
import {Beer} from './Beer'

export const FilteredSearch = (props) => {

// If the filter from props is "fav" then return favorite beers, else, 
//search the name of the beers, or the by of the beers and return that list.

const handleFilter = () => {
  
}

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
