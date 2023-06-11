import React, {useState, useContext} from 'react';
import {data} from '../../../data';

/**
 * useContext hook - Allow inheritance of data(removePerson function)
 *  down the heirarchy
*/

//
const PeopleContext = React.createContext();

const TryContextApi = () => {
    const [people, setPeople] = useState(data);


    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };

    return (
        <PeopleContext.Provider value={{ removePerson }}>
        <h3>TryContextApi</h3>
        <List people={people}/>
        </PeopleContext.Provider>
    );
};



const List = ({ people }) => {
    return <>
        {people.map((person) => {
            return <SinglePerson key={person.id} {...person}/>
        })}
        
    </>
};

const SinglePerson = ({id, name}) => {
    const { removePerson } = useContext(PeopleContext);

    return <div className="item">
        <h3>{name}</h3>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>

};

export default TryContextApi;