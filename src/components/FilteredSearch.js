import React from 'react'
import {Beer} from './Beer'



export const FilteredSearch = (props) => {

// If the filter from props is "fav" then return favorite beers, else, 
//search the name of the beers, or the by of the beers and return that list.

const handleTextFilter = (filter) => {
  // filter through the beers list and return a new list that contains the filter from either the name, or by
  
  let filteredList = props.beers
// check if the term is used and filter by that

// if the rating and the term are used, then filter by that, otherwise use the rating if the term is still set to 'fav'
// Should there be a rating filter? Should this instead be "Sort by:" and provide highest to lowest?
// Door dash overs "Over 3.5" as a rating system with price being basically a radio selector.
    if (filter !== 'fav' && filter.term.length > 0) {
        filteredList = props.beers.filter(beer => beer.name.toLowerCase().includes(props.filter.term) || beer.by.toLowerCase().includes(props.filter.term))
    }
    
   if (filter.rating > 1) {
        filteredList = filteredList.filter(beer => beer.rating >= filter.rating)    
   }

   if (filter.term == ''){
       filteredList = filteredList.filter(beer => beer.fav)
   }

    
    return (
        <>
            {filteredList.map(beer => {
                return <Beer 
                        key={beer.id}
                        name={beer.name}
                        rating={beer.rating}
                        price={beer.price}
                        />
            })}
        </>
    )
}

    return (
        <div>
            {(props.filter.term == '') ? <h3>My favorite beers!</h3> : null}
            {handleTextFilter(props.filter)}
        </div>
    )
}
