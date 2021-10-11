import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Beer.css';
import useBoop from '../hooks/useBoop';
import {animated} from 'react-spring';
// Renders an individual beer card for the home page.

export const Beer = (props) => {
    const [style, trigger] = useBoop({ scale: 1.02 });

    const generateStars = (num) => {
        let stars = '';
        for (let i = 0; i < num ; i++) {
            stars += '★'
        }
        return stars;
    }

    return (
            <animated.div className='beerItemContainer' style={style} onMouseEnter={trigger}>
                <Link to={`/BeerMeStrength/beer/${props.identifier}`} className='beerItemText name'><h5>{props.name}  <span className='ratingHighlight'>{generateStars(props.rating)}</span></h5></Link>
                {(props.by) ? <p>By: {props.by}</p> : null}
                <p className='beerItemText'><span className='priceHighlight'>{props.price}</span></p>
            </animated.div>
       
    )
}

