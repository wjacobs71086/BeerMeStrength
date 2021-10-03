import { FilteredSearch } from '../components/FilteredSearch';
import {useState} from 'react';
import beerList from '../demo_beer_data.js'
import { MyBeers } from '../components/MyBeers';
import {Search} from '../components/Search';
import React from 'react'
import { Link } from 'react-router-dom';
import useBoop from '../hooks/useBoop';
import {animated} from 'react-spring';

export const HomePage = (props) => {
    const [searching, setSearching] = useState({term: '', rating: null, price: null})
    const [style, trigger] = useBoop({ scale: 1, rotation: 15, x: 0, y: 0 });
    const [brewsList, setBrewsList] = useState(beerList)

    
    const handleSearch = (term) => {
        return setSearching(term)
    }

    const handleDelete = () => {
      
    }

    return (
        <div className='mainContainer'>
          <div className='searchContainer'>
            <Search 
              beers={brewsList}
              handleSearch={handleSearch}/>

            <Link
              to='/new'>
              <animated.button style={style} onMouseEnter={trigger} className='newButton'>+</animated.button>
              </Link>
          </div>
            <FilteredSearch
              filter={searching}
              beers={brewsList}/>

            <p>-------------------</p>

            <MyBeers
              beers={brewsList}/>
        </div>
    )
}
