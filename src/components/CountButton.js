import React, { useState } from 'react';


const CountButton = () => {

    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count => count + 1);
    }

    return (
        <>
            <button onClick={handleClick}>+1</button>
            <div>{count}</div>
        </>
    );
}

export default CountButton;