import { FilteredSearch } from '../components/FilteredSearch';
import {useState, useEffect} from 'react';
import beerList from '../demo_beer_data.js'
import { MyBeers } from '../components/MyBeers';
import {Search} from '../components/Search';
import React from 'react'

export const HomePage = (props) => {

    const [searching, setSearching] = useState({term: '', rating: null, price: null})
    const [brewsList, setBrewsList] = useState(beerList)
    const [showFullList, setShowFullList] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState('')
    
    const handleSearch = (term) => {
        return setSearching(term)
    }

    return (
        <div className='mainContainer'>
          
            <Search 
              beers={brewsList}
              handleSearch={handleSearch}/>
          
            
            
            <div>
            {(showFullList) ? <MyBeers beers={brewsList}/> : <FilteredSearch
              filter={searching}
              beers={brewsList}/>}
            <p className='bottom' onClick={() => setShowFullList(!showFullList)}>{(!showFullList) ? 'All Beers' : 'Favorites'}</p>

            </div>
        </div>
    )
}
