import React from 'react';
import {Link} from 'react-router-dom';

// Renders an individual beer card for the home page.

export const Beer = (props) => {
    return (
        
            <div>
                <Link to={`/beer/${props.identifier}`}><h5>Name: {props.name}</h5></Link>
                {(props.by) ? <p>By: {props.by}</p> : null}
                <p>Rating: {props.rating}</p>
                <p>Price: {props.price}</p>
            </div>
       
    )
}

