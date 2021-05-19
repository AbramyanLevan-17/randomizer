import React from 'react';
import './Search.scss';

const Search = () => {
    return (
        <div className='search'>
            <input className="search-input" placeholder='Enter the name of a meal'/>
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
    )
}

export default Search
