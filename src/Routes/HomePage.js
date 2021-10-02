import { FilteredSearch } from '../components/FilteredSearch';
import {useState, useEffect} from 'react';
import beerList from '../demo_beer_data.js'
import { MyBeers } from '../components/MyBeers';
import {Search} from '../components/Search';
import React from 'react'
import { Link } from 'react-router-dom';
import useBoop from '../hooks/useBoop';
import {animated} from 'react-spring';

export const HomePage = (props) => {
    const [searching, setSearching] = useState({term: '', rating: null, price: null})
    const [style, trigger] = useBoop({  scale: 1.05, rotation: 5, x: 1, y: 1});
    const [brewsList, setBrewsList] = useState(beerList)

    
    const handleSearch = (term) => {
        return setSearching(term)
    }

    const handleDelete = () => {
      
    }

    return (
        <div>
            <Link
              to='/new'>
              <animated.button style={style} onMouseEnter={trigger}>+ New Beer</animated.button>
              </Link>
        
            <Search 
              beers={brewsList}
              handleSearch={handleSearch}/>

            <FilteredSearch
              filter={searching}
              beers={brewsList}/>

            <p>-------------------</p>

            <MyBeers
              beers={brewsList}/>
        </div>
    )
}
