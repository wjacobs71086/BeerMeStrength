import React from 'react'
import beerList from '../demo_beer_data';



export const BeerPage = (props) => {
let selectedBeer = beerList.filter(beer => beer.id == props.match.params.id)[0]

const handleDelete = (id) => {
    beerList.filter(beer => beer.id != id)

    // Loop through the array, check if it's the same then
    for (let i = 0; i < beerList.length; i++){
        if (beerList[i].id == id) {
            beerList.splice(i,1)
        }
    }
}




    return (
        <div>
            <h1>{selectedBeer.name}</h1> 
                <h3>Notes:</h3>
                <p>By: {selectedBeer.by}</p>
                <p>Type: {selectedBeer.type}</p>
                <p>ABV: {selectedBeer.abv}</p>
                <p>Price: {selectedBeer.price}</p>
                <p>Rating: {selectedBeer.rating}</p>
            <button onClick={() => props.history.push('/home')}>Back</button>
            <button onClick={() => {
                handleDelete(selectedBeer.id)
                props.history.push('/home')
                }}>Delete</button>
            <button onClick={() => console.log('Edit')}>Edit</button>
        </div>
    )
}
