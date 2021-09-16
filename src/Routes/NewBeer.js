import React from 'react'
import { Link } from 'react-router-dom';


export const NewBeer = () => {

// This page needs to collect the information from this form, then add the data to the demobeer dataset.
// In a real world case, this will need to actually call an API service function to make a post call to the DB and post this new beer data
// Then, upon completion send the user back to the home page and fetch the updated list.

const handleSubmit = (ev) => {
    ev.preventDefault();
    let newBeer = { 
        name: '', 
        by: '', 
        type: '', 
        abv: 0, 
        rating: 0, 
        price: '', 
        fav: false
    }
    // iterate over ev.target and add them to an object that will be this newBeer. Possible go back to the other method.

   let test = Array.from(ev.target)
    test.forEach(field => {
        if (field.type == 'text') {
            newBeer[field.name] = field.value
        }
    })

console.log('the newest beer', newBeer)


    // **** - const {name, by, type, abv, rating, price, fav} = ev.target
    
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
                <input type='text' name='fav'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
