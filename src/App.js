import './App.css';
import {HomePage} from './Routes/HomePage';
import {NewBeer} from './Routes/NewBeer';
import beerIcon from './beerIcon.png';
import { Route} from "react-router-dom";
import {BeerPage} from './Routes/Beerpage';

function App() {


  return (
    <div className="App">
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"
      rel="stylesheet"/>  */}
      
      <header className='header'>
        <img src={beerIcon} alt="beerIcon" className='beerIcon' />
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
