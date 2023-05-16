import React, { useEffect, useState} from 'react'

//runs after every render
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('call UseEffect');
        
        //only use conditionals inside useEffect
        if(value > 1){
            document.title = `New Messages(${value})`;
        }
    }), [];

    console.log('Render Component');
    return (
    <>
        <h2>UseEffect Basics</h2>
        <h2>{value}</h2>
        <button className='btn' onClick={() => setValue(value + 1)}>Click</button>
    </>
    );
};

export default UseEffectBasics;