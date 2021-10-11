import React, {useState, useEffect} from 'react'
import './Search.css';
import { Link } from 'react-router-dom';
import useBoop from '../hooks/useBoop';
import {animated} from 'react-spring';

export const Search = (props) => {
    const [search, setSearch] = useState({term: '', rating: '', price: ''})
    const [style, trigger] = useBoop({ scale: 1, rotation: 15, x: 0, y: 0 });
    useEffect(() => {
        props.handleSearch(search)
      }, [search]);

    return (
        <div className='searchContainer'>
        
            <input 
                type='text' 
                defaultValue=''
                className='searchItem textSearch'
                onChange={(e) => {setSearch({...search, term:e.target.value.toLowerCase()})}}
                placeholder="&#61442;"/>

            <div className='subSearch'>
                <label className='searchItem'>Rating: </label>
                <select name="rating" 
                    className='searchItem'
                    value={(search.rating) ? search.rating : ''}
                    onChange={(e) => {
                        setSearch({...search, rating:e.target.value})
                    }}
                    >
                <option value={''}></option>
                <option value={1}>1+</option>
                <option value={2}>2+</option>
                <option value={3}>3+</option>
                <option value={4}>4+</option>
                <option value={5}>5+</option>
                </select>

                <label className='searchItem'>Price: </label>
                <select 
                    name="price" 
                    className='searchItem'
                    value={(search.price) ? search.price : ''}
                    onChange={(e) => {
                        setSearch({...search, price: e.target.value})
                    }}>
                    <option value=""></option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                    <option value="$$$$$">$$$$$</option>
                </select>
                <Link to='/BeerMeStrength/new'>
                    <animated.button style={style} onMouseEnter={trigger} className='newButton'>New</animated.button>
                </Link>
             </div>
        </div>
    )
}
