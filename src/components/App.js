import React from 'react';
import CountButton from './CountButton';
import SearchBar from './SearchBar';

const App = () => {

    return (
        <div>
            <SearchBar />
            <h1>My First React App</h1>
            <CountButton incrementBy={1} buttonColor={"blue"}/>
            <CountButton incrementBy={5} buttonColor={"green"}/>
            <CountButton incrementBy={100} buttonColor={"red"}/>
        </div>
    );
}

export default App;
