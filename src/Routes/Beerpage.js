import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import beerList from '../demo_beer_data';


export const BeerPage = (props) => {
const [editing, setEdit] = useState(false)
const [price, setPrice] = useState('')
const [rating, setRating] = useState('')
const [beer, setBeer] = useState(beerList.beerList.filter(beer => beer.id == props.match.params.id)[0])

let selectedBeer = beerList.beerList.filter(beer => beer.id == props.match.params.id)[0]
const selectedBeerIndex = beerList.beerList.indexOf(selectedBeer)


const handleSubmit = (ev) => {
    ev.preventDefault()
    beerList.beerList[selectedBeerIndex] = beer
    props.history.push('/')
}

const handleDelete = (id) => {
    for (let i = 0; i < beerList.beerList.length; i++){
        if (beerList.beerList[i].id == id) {
            beerList.beerList.splice(i,1)
        }
    }
}

const handleRender = () => {
    if (!editing) {
        return (
            <>
                <h1>{beer.name}</h1> 
                    <h3>Notes:</h3>
                    <p>By: {beer.by}</p>
                    <p>Type: {beer.type}</p>
                    <p>ABV: {beer.abv}</p>
                    <p>Price: {beer.price}</p>
                    <p>Rating: {beer.rating}</p>
                <button onClick={() => props.history.push('/')}>Back</button>
                <button onClick={() => {
                    handleDelete(beer.id)
                    props.history.push('/')
                    }}>Delete</button>
                <button onClick={() => setEdit(true)}>Edit</button>
            </>
        )
    } else {
        return (
            <>
             
                <form className='beerFormContainer' onSubmit={handleSubmit}>
               
                <input className='formInputText' placeholder='Name' autoComplete='off' type='text' name='name' value={beer.name} onChange={(e) => {
                    setBeer({...beer, name:e.target.value})
                }}/>
                <input className='formInputText' placeholder='Brewery' type='text' name='by' value={beer.by} onChange={(e) => {
                    setBeer({...beer, by:e.target.value})
                }}/>
                <input className='formInputText' placeholder='Type'  type='text' name='type' value={beer.type} onChange={(e) => {
                    setBeer({...beer, type:e.target.value})
                }}/>
                <input className='formInputText' placeholder='ABV'  type='text' name='abv' value={beer.abv} onChange={(e) => {
                    setBeer({...beer, abv:e.target.value})
                }}/>

                <select 
                    name="rating" 
                    className='formInputSelect'
                    value={beer.rating}
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
                    value={beer.price}
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
                    <input type='radio' name='fav' value={beer.fav} checked={(beer.fav) ? true : false} onClick={(e) => {
                        setBeer({...beer, fav:!e.target.value})
                }}/>
                </div>
                <div>
                    <button><Link to='/'>Back</Link></button>
                    <button type='submit'>Submit</button>
                </div>
            </form> 
            </>
        )
    }
}





    return (
        <div>
            {handleRender()}
        </div>
    )
}
