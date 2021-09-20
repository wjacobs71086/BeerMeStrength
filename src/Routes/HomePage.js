import { FilteredSearch } from '../components/FilteredSearch';
import {useState} from 'react';
import beerList from '../demo_beer_data.js'
import { MyBeers } from '../components/MyBeers';
import {Search} from '../components/Search';
import React from 'react'
import { Link } from 'react-router-dom';
import Boop from '../components/Boop';

export const HomePage = () => {
    const [searching, setSearching] = useState({term: '', rating: null, price: null})

    const handleSearch = (term) => {
        return setSearching(term)
    }

    return (
        <div>
          <Boop timing={200} scale={1.15}> 
            <Link
              to='/new'>
              + New Beer
              </Link>
          </Boop>
            <Search 
              beers={beerList}
              handleSearch={handleSearch}/>

            <FilteredSearch
              filter={searching}
              beers={beerList}/>

            <p>-------------------</p>

            <MyBeers
              beers={beerList}/>
        </div>
    )
}
