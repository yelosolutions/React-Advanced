import React, { useState, useEffect } from 'react'



const ShowHide = () => {
    const [show, setShow] = useState(false);

    if(show){
        return <>
        <button className='btn' onClick={() => setShow(!show)}>Show/Hide</button>
        <Item/>
        </>
    } return <>
        <button className='btn' onClick={() => setShow(!show)}>Show/Hide</button>
    </>
};



const Item = () => {
    const [size, setSize] = useState(window.innerWidth);


    const changeSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() =>{
        window.addEventListener('resize', changeSize);

        //cleanup callback function
        return () => {
            window.removeEventListener('resize', changeSize);
        };
    });
    return (
        <div>
            <h1>Window</h1>
            <h2>Size: {size}</h2>
        </div>
    );
};



export default ShowHide;