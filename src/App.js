import './App.css';
import { Favorites } from './components/Favorites';
import {useState} from 'react';
import beerList from './demo_beer_data.js'
import { MyBeers } from './components/MyBeers';
import {Search} from './components/Search';


function App() {
  const [beers, setBeers] = useState(beerList)
  const [searching, setSearching] = useState('')


const handleSearch = (term) => {
    return setSearching(term)
}
console.log(searching, 'term in searching')
  // Create a search component and search state. Once user starts typing, 
  // all other components drop and a list of beers by the search shows up



// TODO: Figure out how to get the search to set the state with each new letter. Then we can work to filter the list by that term




  return (
    <div className="App">
      <h1>Beer Me Strength</h1>
        <Search 
          beers={beers}
          handleSearch={handleSearch}
          // onChange={searchingForBeer}
        />
          <Favorites
            beers={beers}/>
        <p>-------------------</p>
          <MyBeers
            beers={beers}/>
    </div>
  );
}

export default App;
