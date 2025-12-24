import React, { useState, useEffect } from 'react';
import './CountButton.css';


const CountButton = (props) => {

    const {incrementBy, buttonColor} = props;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count => count + incrementBy);
    }
    
    const divStyle = {
        color: 'blue',
        fontSize: '32px',
        fontWeight: 'bold',
        padding: '10px 20px',

    }

    const buttonStyle = {
        backgroundColor: buttonColor,
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        padding: '10px 20px',
        margin: '5px',
    }

    useEffect(() => {
        console.log("Only called when component is mounted");
    }, []);

    useEffect(() => {
        console.log('called when count is updated and when component is mounted', count);
        if (count === 10){
            alert('Count reached 10');
        }
    }, [count]);
 
    return (
        <>
            <button onClick={handleClick} style={buttonStyle}>+{incrementBy}</button>
            <div style={divStyle} className="count-display">{count}</div>
            
        </>
    );
}

export default CountButton;