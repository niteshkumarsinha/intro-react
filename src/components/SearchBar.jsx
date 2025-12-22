import React, { useState, useRef} from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleClearClick = (e) => {
        inputRef.current.value = '';
        setSearchTerm('');   
    }

    const handleSearchClick = () => {
        console.log(searchTerm);
    }

    const shouldDisplayButton = () => {
        return searchTerm.length > 0;
    }

    return (
        <>
            <input ref={inputRef} type="text" placeholder="Search..." className="search-bar" onChange={handleSearch}  />
            <div>{searchTerm}</div>
            <button onClick={handleClearClick} disabled={!shouldDisplayButton()}>Clear</button> 
            <button onClick={handleSearchClick} disabled={!shouldDisplayButton()}>Search</button> 
        </>
    );
}

export default SearchBar;   