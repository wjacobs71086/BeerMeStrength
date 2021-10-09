import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import beerList from '../demo_beer_data';
import './BeerForm.css';


export const NewBeer = (props) => {
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')

// This page needs to collect the information from this form, then add the data to the demobeer dataset.
// In a real world case, this will need to actually call an API service function to make a post call to the DB and post this new beer data
// Then, upon completion send the user back to the home page and fetch the updated list.
const handleSubmit = (ev) => {
    
    ev.preventDefault();
    const {name, by, type, abv, rating, price, fav} = ev.target
    // This is where I'll make a call to add this to the beers list on the Server/DB



    beerList.beerList.push({
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
        <div className='newBeerPage'>
            
            <form className='beerFormContainer' onSubmit={handleSubmit}>
               
                <input className='formInputText' placeholder='Name' type='text' name='name'/>
                <input className='formInputText' placeholder='Brewery' type='text' name='by'/>
                <input className='formInputText' placeholder='Type'  type='text' name='type'/>
                <input className='formInputText' placeholder='ABV'  type='text' name='abv'/>

                <select 
                    name="rating" 
                    className='formInputSelect'
                    value={(rating) ? rating : ''}
                    onChange={(e) => {
                        setRating(`${e.target.value}`)
                        }}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <select 
                    name="price" 
                    className='formInputSelect'
                    value={(price) ? price : ''}
                    onChange={(e) => {
                        setPrice(`${e.target.value}`)
                        }}>
                    <option value=""></option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                    <option value="$$$$$">$$$$$</option>
                </select>
                
                <div>
                    <label>Favorite?</label>
                    <input type='checkbox' name='fav' value={true}/>
                </div>
                <div>
                    <button><Link to='/'>Back</Link></button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
