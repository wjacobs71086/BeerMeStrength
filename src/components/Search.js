import React, {useState, useEffect} from 'react'
import './Search.css';

// This should be able to check the current state of all search aspects together and pass this into the handleSearch feature 
// EX: props.handleSearch({term:'', rating: 4, price:'$$'})




export const Search = (props) => {
    const [search, setSearch] = useState({term: '', rating: '', price: ''})

    useEffect(() => {
        props.handleSearch(search)
      }, [search]);

    return (
        <>
            <input 
                type='text' 
                defaultValue=''
                className='searchItem'
                onChange={(e) => {setSearch({...search, term:e.target.value.toLowerCase()})}}
                placeholder='Search'/>

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
        </>
    )
}
