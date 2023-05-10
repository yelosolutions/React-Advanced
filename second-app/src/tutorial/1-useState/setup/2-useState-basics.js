import React, { useState } from "react";


const UseStateBasics = () => {
    const [text, setText] = useState('hello');
    
    console.log(useState('hello')[1]);

    

    const clickHandler = () => {
        if (text === 'hello'){
            setText('Yelosolutions');
        } else{
            setText('hello');
        };
    }
    return (
    <React.Fragment>
        <h1>useState basic example</h1>
        <h2>{text}</h2>
        <button type="button" className="btn" onClick={clickHandler}>
            Change Title
        </button>
    </React.Fragment>)
};


//const value = useState(1)[0];
    //const setValue = useState(1)[1];

    /*
    var init = 0;
    const [value, setValue] = useState(init);

    console.log(useState(init)[0]);
    //console.log(useState(1)[1]);

    const clickHandler = () => {
        if (value === init){
            init += 1;
            setValue(init);
        } else{
            setValue(1);
        };
        
    };
    */


export default UseStateBasics;
