import React, {useState, useEffect} from 'react'

// This should be able to check the current state of all search aspects together and pass this into the handleSearch feature 
// EX: props.handleSearch({term:'', rating: 4, price:'$$'})




export const Search = (props) => {
    const [search, setSearch] = useState({term: '', rating: '', price: ''})

    useEffect(() => {
        props.handleSearch(search)
      }, [search]);

    return (
        <div>
            <input 
                type='text' 
                defaultValue=''
                onChange={(e) => {setSearch({...search, term:e.target.value.toLowerCase()})}}
                placeholder='beer'/>

            <label>Rating: </label>
            <select name="rating" 
                    value={(search.rating) ? search.rating : ''}
                    onChange={(e) => {
                        setSearch({...search, rating:e.target.value})
                    }}
                    >
                <option value={1}>1+</option>
                <option value={2}>2+</option>
                <option value={3}>3+</option>
                <option value={4}>4+</option>
                <option value={5}>5+</option>
            </select>

            <label>Price: </label>
            <select 
                name="price" 
                value={(search.price) ? search.price : ''}
                    onChange={(e) => {
                        setSearch({...search, price: e.target.value})
                    }}>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
                <option value="$$$$$">$$$$$</option>
            </select>
        </div>
    )
}
