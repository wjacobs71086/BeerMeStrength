import logo from './logo.svg';
import './App.css';
import { Favorites } from './components/Favorites';
import {useState} from 'react';
import beerList from './demo_beer_data.js'


// Track at the App Level (logged_in, darkMode, user, beers)




function App() {
  const [beers, setstate] = useState(beerList)
// console.log(beers)



  return (
    <div className="App">
      <Favorites
        beers={beers}
      />
       
    </div>
  );
}

export default App;
