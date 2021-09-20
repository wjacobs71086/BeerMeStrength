import React from 'react'
import BeerList from '../demo_beer_data';

export const BeerPage = (props) => {

let selectedBeer = BeerList.filter(beer => beer.id == props.match.params.id)[0]


    return (
        <div>
            <h1>This is the page for {selectedBeer.name}</h1>
        </div>
    )
}
