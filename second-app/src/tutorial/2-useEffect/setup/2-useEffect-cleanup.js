import React, { useState, useEffect } from 'react';

//cleanup function


const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);
    
    //logs width size of media window in console 
    const checkSize = () => {
        setSize(window.innerWidth);
    };

    
    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize', checkSize);

        //cleanup function
        return () => {
            console.log('cleanup!');
            window.removeEventListener('resize', checkSize);
        };
    });
    console.log('render');

    return (
    <>
        <h1>Window</h1>
        <h2>{size}</h2>
    </>
    );
};

export default UseEffectCleanup;