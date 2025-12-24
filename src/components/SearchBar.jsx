import React, { useState, useRef} from 'react';
import './SearchBar.css';



const SearchBar = (props) => {
    const { products } = props;
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

    const shouldDisplayButton = searchTerm.length > 0;
    const filteredProducts = products.filter(product => product.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <input ref={inputRef} type="text" placeholder="Search..." className="search-bar" onChange={handleSearch}  />
            <ul>
                {
                   filteredProducts.map(product => <li key={product}>{product}</li>)
                }
            </ul>
            <button onClick={handleClearClick} disabled={!shouldDisplayButton}>Clear</button>
            {shouldDisplayButton && <button onClick={handleSearchClick}>Search</button>}
        </>
    );
}

export default SearchBar;   