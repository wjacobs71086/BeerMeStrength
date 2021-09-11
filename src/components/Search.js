import React, {useState} from 'react'

export const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("")



    return (
        <div>
            <input 
                type='text' 
                defaultValue=''
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                    props.handleSearch(searchTerm)
                }}
                placeholder='beer'/>
        </div>
    )
}
