import React from 'react'
import { Link } from 'react-router-dom';


export const NewBeer = () => {
    return (
        <div>
            <Link
                to='/'>
                Back
            </Link>
            
            <form>
                <label>Name: </label>
                <input type='text'/>
                <label>By: </label>
                <input type='text'/>
                <label>Type: </label>
                <input type='text'/>
                <label>ABV: </label>
                <input type='text'/>
                <label>Rating: </label>
                <input type='text'/>
                <label>Price: </label>
                <input type='text'/>
                <label>Favorite?</label>
                <input type='text'/>
            </form>
        </div>
    )
}
