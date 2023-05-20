import React, { useState, useEffect } from 'react'


// const item = () => {
//         const divElement = document.getElementById('hide');
//         divElement.fadeOut(2000);
// };

const ShowHide = () => {
    const [size, setSize] = useState(window.innerWidth);

    const changeSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() =>{
        window.addEventListener('resize', changeSize);
        return () => {
            window.removeEventListener('resize', changeSize);

        };
    });

    return (
        <>
        <button className='btn' >Show/Hide</button>
        <div>
            <h1>Window</h1>
            <h2>Size: {size}</h2>
        </div>
        </>
    )
};



export default ShowHide;