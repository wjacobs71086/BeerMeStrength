import React from 'react'

// Renders an individual beer card for the home page.

export const Beer = (props) => {
    return (
        <div>
            <h5>Name: {props.name}</h5>
            {(props.by) ? <p>By: {props.by}</p> : null}
            <p>Rating: {props.rating}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

