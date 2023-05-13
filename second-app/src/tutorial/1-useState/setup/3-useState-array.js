import React, { useState } from "react";
import { data } from '../../../data';

const UseStateArray = () => {
    //destructuring the array of objects(data)
    //Use useState and pass in data(imported), data here is an array of objects.
    const [people, setPeople] = useState(data);
    
    const removeItem = (id) => {
        //filter out the array, remain with ones with id thats NOT equal to the id parameter
        let newPeople = people.filter((person) => id !== person.id)
        
        //use setPeople to render these newPeople
        setPeople(newPeople);
    };


    //<></> can be used instead of <React.Fragment> </React.Fragment>
    //use the map method on 'people' array to render each person
    return (<>
    { people.map((person) => {
        const {id, name} = person;
        return <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>Remove</button>
    </div>
    } )}
    <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
    </button>
    </>
    )
};

export default UseStateArray;