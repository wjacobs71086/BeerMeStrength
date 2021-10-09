import './App.css';
import {HomePage} from './Routes/HomePage';
import {NewBeer} from './Routes/NewBeer';
// import { LandingPage } from './Routes/LandingPage';
import { Route} from "react-router-dom";
import {BeerPage} from './Routes/Beerpage';

function App() {


  return (
    <div className="App">
      <header className='header'>
        
        <h1 className={'title'}>Beer Me Strength</h1>
        
      </header>
      
        <Route
          exact
          path={'/new'}
          component={NewBeer}/>

        {/* <Route
          exact
          path={'/home'}
          component={HomePage}/> */}

        <Route
          path={'/beer/:id'}
          component={BeerPage}/>

        <Route
          exact
          path={'/'}
          component={HomePage}/>
    </div>
  );
}

export default App;
