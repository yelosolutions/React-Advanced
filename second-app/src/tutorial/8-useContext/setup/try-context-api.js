import React, {useState, useContext} from 'react';
import {data} from '../../../data';

/**
 * useContext hook - Allow inheritance of data(removePerson function)
 *  down the heirarchy
*/
const TryContextApi = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        const newPeople = people.filter((person) => person.id !== id );
        return setPeople(newPeople);
    };

    return (
        <>
        <h3>TryContextApi</h3>
        <List people={people}/>
        </>
    );
};



const List = ({people}) => {
    return <section>
        {people.map((person) => {
            return <SinglePerson key={person.id} name={person.name}/>
        })}
        
    </section>
};

const SinglePerson = ({id, name}) => {
    return <div className="item">
        <h3>{name}</h3>
        <button ></button>
    </div>

};

export default TryContextApi;