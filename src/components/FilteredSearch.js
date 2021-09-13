import React from 'react'
import {Beer} from './Beer'



export const FilteredSearch = (props) => {

// If the filter from props is "fav" then return favorite beers, else, 
//search the name of the beers, or the by of the beers and return that list.

const handleTextFilter = (filter) => {
  // filter through the beers list and return a new list that contains the filter from either the name, or by
  
  let filteredList = [] 

  if (filter != 'fav' && filter.term.length > 0) {
    filteredList = props.beers.filter(beer => beer.name.toLowerCase().includes(props.filter.term) || beer.by.toLowerCase().includes(props.filter.term) || beer.rating >= props.filter.rating)
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
    } else {
        return (
            <>
                <h3>This is a list of my favorite beers</h3>
                    {props.beers.map(beer => {
                        if (beer.fav){
                            return <Beer 
                                    key={beer.id}
                                    name={beer.name}
                                    rating={beer.rating}
                                    price={beer.price}
                                    />
                        }
                    })}
            </>
        )
    }
}

const handlePriceFilter = () => {
    // filter through the beers list and return a new list that contains the filter from the selected price value and below
    // sort from rated price to lowest
  }

  const handleRatingFilter = () => {
    // filter through the beers list and return a new list that contains the filter from the selected rating value and below
    // sort from rated to lowest
  }

    return (
        <div>
            {handleTextFilter(props.filter)}
        </div>
    )
}
