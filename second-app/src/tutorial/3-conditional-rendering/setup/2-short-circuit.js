import React, { useState } from "react";
//short circuit evaluation - helpful in setting up the expressions in JSX 
//ternary operator - condition ? expression1 : expression2

//to display something conditionarily
const ShortCircuit = () => {    
    const [text, setText] = useState(''); //NOTE: empty string is a falsy value
    
    const [isError, setIsError] = useState(false);

    //returns first truthy value or last falsy value if all are falsy
    //const firstValue = text || 'hello world';
    //returns first falsy value or last truthy value if all are truthy
    //const secondValue = text && 'hello world';

    
    return (
        <>
        {/* <h1>{firstValue}</h1>
        <h1>Should be here: {secondValue}</h1> */}
        
        <h1>{text || 'john doe'}</h1>
        <button className="btn" onClick={() => setIsError(!isError)}>
            Toggle Error
        </button>
        {isError ? (
        <p>There is error</p>
        ) : (
            <div>
                <h2>There is no error</h2>
            </div>
            )}
        </>
    );
};

export default ShortCircuit;
