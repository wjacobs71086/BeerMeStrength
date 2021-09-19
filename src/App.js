import './App.css';
// import { FilteredSearch } from './components/FilteredSearch';
// import {useState} from 'react';
// import beerList from './demo_beer_data.js'
// import { MyBeers } from './components/MyBeers';
// import {Search} from './components/Search';
import {HomePage} from './Routes/HomePage';
import {NewBeer} from './Routes/NewBeer';
import { LandingPage } from './Routes/LandingPage';
import { Route } from "react-router-dom";


function App() {
  //const [beers, setBeers] = useState(beerList)
//   const [searching, setSearching] = useState({term: '', rating: null, price: null})

// const handleSearch = (term) => {
//     return setSearching(term)
// }

// TODO: Figure out how to get the search to set the state with each new letter. Then we can work to filter the list by that term

  return (
    <div className="App">
      <h1>Beer Me Strength</h1>
        <Route
          exact
          path={'/new'}
          component={NewBeer}/>

        <Route
          exact
          path={'/home'}
          component={HomePage}/>

        <Route
          exact
          path={'/'}
          component={LandingPage}/>
    </div>
  );
}

export default App;
