import React from 'react'
import {Beer} from './Beer'



export const FilteredSearch = (props) => {

const {filter, beers } = props;
// console.log('this is the filter', filter)

const handleTextFilter = (filter) => {
  // filter through the beers list and return a new list that contains the filter from either the name, or by
  
  let filteredList = props.beers
    if (filter !== 'fav' && filter.term.length > 0) {
        filteredList = beers.filter(beer => beer.name.toLowerCase().includes(filter.term) || beer.by.toLowerCase().includes(filter.term))
    }
    
   if (filter.rating > 1) {
        filteredList = filteredList.filter(beer => beer.rating >= filter.rating)    
   }

   if (filter.term === ''){
    // console.log('the filtered list',filteredList)
    filteredList = filteredList.beerList.filter(beer => beer.fav)
   }

   if (filter.price != '' && filter.price){
    filteredList = filteredList.filter(beer => beer.price.length >= filter.price.length)
}

    
    return (
        <>
            {filteredList.map(beer => {
                return <Beer 
                        key={beer.id}
                        identifier={beer.id}
                        name={beer.name}
                        rating={beer.rating}
                        price={beer.price}/>
            })}
        </>
    )
}

    return (
        <div>
            {(filter.term === '' && filter.price == '' & filter.rating == '') ? <h3>My favorite beers!</h3> : null}
            {handleTextFilter(props.filter)}
        </div>
    )
}
