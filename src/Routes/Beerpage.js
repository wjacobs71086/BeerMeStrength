import React from 'react'
import beerList from '../demo_beer_data';


export const BeerPage = (props) => {

let selectedBeer = beerList.beerList.filter(beer => beer.id == props.match.params.id)

const handleDelete = (id) => {
    //beerList.beerList.filter(beer => beer.id != id)

    // Loop through the array, check if it's the same then
    for (let i = 0; i < beerList.beerList.length; i++){
        if (beerList.beerList[i].id == id) {
            beerList.beerList.splice(i,1)
        }
    }
}

    return (
        <div>
            <h1>{selectedBeer[0].name}</h1> 
                <h3>Notes:</h3>
                <p>By: {selectedBeer[0].by}</p>
                <p>Type: {selectedBeer[0].type}</p>
                <p>ABV: {selectedBeer[0].abv}</p>
                <p>Price: {selectedBeer[0].price}</p>
                <p>Rating: {selectedBeer[0].rating}</p>
            <button onClick={() => props.history.push('/home')}>Back</button>
            <button onClick={() => {
                handleDelete(selectedBeer[0].id)
                props.history.push('/home')
                }}>Delete</button>
            <button onClick={() => console.log('Edit')}>Edit</button>
        </div>
    )
}
