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
                onChange={(e) => {setSearch({term:e.target.value, rating: null, price: null})}}
                placeholder='beer'/>

            <label>Rating: </label>
            <select name="rating" 
                    value={search.rating}
                    onChange={(e) => {
                        console.log('this is the rating selected =>', search.rating)
                        setSearch({term:e.target.value, rating: e.target.value, price: null})
                    }}
                    >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <label>Price: </label>
            <select name="price">
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
                <option value="$$$$$">$$$$$</option>
            </select>
        </div>
    )
}
