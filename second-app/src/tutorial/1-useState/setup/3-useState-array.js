import React, { useState } from "react";
import {data} from '../../../data';

const UseStateArray = () => {
    //destructuring the array of objects(data)
    //const {id, name} = data;
    //const {person, setPerson} = React.useState(data);

    // const clearItems = () => {
    //     setPerson([]);
    // }
    
    
    // const removeItem = (person) => {
    //     person = data.shift();
    // }



    return (<>
    <div className="item">
        <h4>{data[0].name}</h4>
        <button >Remove</button>
    </div>
    {/* <button type="button" className="btn" onClick={clearItems()}>
        Clear
    </button> */}
    </>
    )
};

export default UseStateArray;