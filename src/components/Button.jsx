import React from 'react';

const Button = (props) => {
    return (
        <button style={{color: 'white', backgroundColor: 'blue', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold'}}>
            {props.buttonText || props.children}
        </button>
    );
}

export default Button;