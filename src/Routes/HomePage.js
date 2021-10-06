import { FilteredSearch } from '../components/FilteredSearch';
import {useState} from 'react';
import beerList from '../demo_beer_data.js'
import { MyBeers } from '../components/MyBeers';
import {Search} from '../components/Search';
import React from 'react'

export const HomePage = (props) => {
    const [searching, setSearching] = useState({term: '', rating: null, price: null})
    const [brewsList, setBrewsList] = useState(beerList)
    const [showFullList, setShowFullList] = useState(false)
    
    const handleSearch = (term) => {
        return setSearching(term)
    }

    return (
        <div className='mainContainer'>
          <div className='searchContainer'>
            <Search 
              beers={brewsList}
              handleSearch={handleSearch}/>

            
          </div>
            <FilteredSearch
              filter={searching}
              beers={brewsList}/>

            <p>-------------------</p>
            <div>
            <p className='bottom' onClick={() => setShowFullList(!showFullList)}>{(!showFullList) ? 'All Beers' : 'Hide Beers'}</p>
            {(showFullList) ? <MyBeers beers={brewsList}/> : null}
            </div>
        </div>
    )
}
