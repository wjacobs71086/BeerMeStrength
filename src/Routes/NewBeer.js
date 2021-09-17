import React from 'react'
import { Link } from 'react-router-dom';
import beerList from '../demo_beer_data';


export const NewBeer = (props) => {
    

// This page needs to collect the information from this form, then add the data to the demobeer dataset.
// In a real world case, this will need to actually call an API service function to make a post call to the DB and post this new beer data
// Then, upon completion send the user back to the home page and fetch the updated list.
const handleSubmit = (ev) => {
    
    ev.preventDefault();
    const {name, by, type, abv, rating, price, fav} = ev.target
    // This is where I'll make a call to add this to the beers list on the Server/DB
    beerList.push({
        id: Math.random(),
        name: name.value,
        by: by.value,
        type: type.value,
        abv: abv.value,
        rating: rating.value,
        price: price.value,
        fav: fav.checked
    })

    props.history.goBack();
    


    // console.log('this be the object to pass up', {
    //     name: name.value,
    //     by: by.value,
    //     type: type.value,
    //     abv: abv.value,
    //     rating: rating.value,
    //     price: price.value,
    //     fav: fav.checked
    // })
}

    return (
        <div>
            <Link to='/'>Back</Link>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' name='name'/>
                <label>By: </label>
                <input type='text' name='by'/>
                <label>Type: </label>
                <input type='text' name='type'/>
                <label>ABV: </label>
                <input type='text' name='abv'/>
                <label>Rating: </label>
                <input type='text' name='rating'/>
                <label>Price: </label>
                <input type='text' name='price'/>
                
                <label>Favorite?</label>
                <input type='radio' name='fav' value={true}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
