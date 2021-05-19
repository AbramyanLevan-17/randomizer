import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
    }
    return (
            <form onSubmit={handleSubmit}  className='search'>
            <input className="search-input" 
                   placeholder='Enter the name of a meal'
                   onChange={handleChange}
                   value={name}
                  
            />
            <i class="fa fa-search" aria-hidden="true"></i>
            <button type='submit'></button>
            </form>
    )
}

export default Search;
