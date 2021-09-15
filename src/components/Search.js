import React, {useState, useEffect} from 'react'

// This should be able to check the current state of all search aspects together and pass this into the handleSearch feature 
// EX: props.handleSearch({term:'', rating: 4, price:'$$'})




export const Search = (props) => {
    const [search, setSearch] = useState({term: '', rating: null, price: null})

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
                    value={search.rating}
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
                value={[]}
                    onChange={(e) => {
                        console.log('welp, we will get there', e.target.value)
                    }}
                multiple>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
                <option value="$$$$$">$$$$$</option>
            </select>
        </div>
    )
}
