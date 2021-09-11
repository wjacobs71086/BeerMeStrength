import React, {useState, useEffect} from 'react'

export const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        props.handleSearch(searchTerm)
      }, [searchTerm]);


    return (
        <div>
            <input 
                type='text' 
                defaultValue=''
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                placeholder='beer'/>
        </div>
    )
}
