import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Beer.css';
import useBoop from '../hooks/useBoop';
import {animated} from 'react-spring';
// Renders an individual beer card for the home page.

export const Beer = (props) => {
    // console.log('props', props)
    const [style, trigger] = useBoop({ scale: 1.02 });
    return (
            <animated.div className='beerItemContainer' style={style} onMouseEnter={trigger}>
                <Link to={`/beer/${props.identifier}`} className='beerItemText'><h5>Name: {props.name}</h5></Link>
                {(props.by) ? <p>By: {props.by}</p> : null}
                <p className='beerItemText'>Rating: {props.rating}</p>
                <p className='beerItemText'>Price: {props.price}</p>
            </animated.div>
       
    )
}

