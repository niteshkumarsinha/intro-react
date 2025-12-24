import React from 'react';
import CountButton from './CountButton';
import SearchBar from './SearchBar';

const App = () => {


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

    return (
        <div>
            <SearchBar products={fruits} />
            <SearchBar products={sports} />
            <h1>My First React App</h1>
            <CountButton incrementBy={1} buttonColor={"blue"}/>
            <CountButton incrementBy={5} buttonColor={"green"}/>
            <CountButton incrementBy={100} buttonColor={"red"}/>
        </div>
    );
}

export default App;
