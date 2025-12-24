import React, { useState, useEffect } from 'react';
import CountButton from './CountButton';
import SearchBar from './SearchBar';
import Button from './Button';

const App = () => {
    const [products, setProducts] = useState([]);

    const fruits = [
        'Apple',
        'Banana',
        'Orange',
        'Grapes',
        'Mango',
        'Guava',
        'Papaya',
        'Peach',
        'Pear',
        'Pineapple',
        'Pomegranate',
        'Strawberry',
        'Watermelon'
    ];

    const sports = [
        'Football',
        'Basketball',
        'Tennis',
        'Cricket',
        'Hockey',
        'Volleyball',
        'Badminton',
        'Table Tennis',
        'Golf',
        'Soccer',
        'Rugby',
        'Boxing'
    ];

    useEffect(() => {
        async function fetchData() {
            const product = await fetch('https://fakestoreapi.com/products');
            const data = await product.json();
            setProducts([data[0].title]);
        }
        fetchData();
    }, []);

    const hasProducts = products.length > 0;

    return (
        <div>
            <Button buttonText="Click me"/>
            <Button>Click me</Button>   
            <SearchBar products={fruits} />
            <SearchBar products={sports} />
            {hasProducts ? <p>Products are available</p> : <p>No products available</p>}
            <SearchBar products={products} />
            <h1>My First React App </h1>
            <CountButton incrementBy={1} buttonColor={"blue"}/>
            <CountButton incrementBy={5} buttonColor={"green"}/>
            <CountButton incrementBy={100} buttonColor={"red"}/>
        </div>
    );
}

export default App;
