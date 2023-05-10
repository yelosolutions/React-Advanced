import React, { useState }from "react";

//Uses useState hook to count the number of times a button is clicked 
const CountValues = () => {
    /* Before
    const  count = useState(0)[0];
    const setCount = useState(0)[1];

    */ 
   //After array restructuring
    const [count, setCount] = useState(0);


    const clickHandler = () =>{
        setCount(count+1)
    };

    return (
        <React.Fragment>
            <h3>You've clicked {count} times, we hear you</h3>
            <button type='button' className='btn' onClick={clickHandler}>
                Count
            </button>
        </React.Fragment>
    );
    

}

export default CountValues;