import React, {useEffect, useState} from "react";

const CleanupTry = () => {
    //create and manipulate state values
    const [size, setSize] = useState(window.innerWidth);

    const resize = () =>{
        setSize(window.innerWidth);
    };

    //allows side-effects ('resize' event in this case)
    useEffect(() => {
        console.log('useEffect');

        //problem - triggers a render, which in turn calls useEffect
        //this creates a LOOP which crushes the browser
        window.addEventListener('resize', resize);

        //a cleanup is therefore necessary(use callback function)
        // to remove eventListener
        return(() => {
            window.removeEventListener('resize', resize);
            console.log('cleanup!');
        });


    });

    console.log('render');
    console.log(size);

    return (
    <>
        <h1>Window</h1>
        <h2>{size}</h2>
    </>
    );
};

export default CleanupTry;
