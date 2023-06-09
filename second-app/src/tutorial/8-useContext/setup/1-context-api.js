import React, {useState, useContext} from 'react';
import { data } from '../../../data'
/**
 * context api - is the alternative of using prop drilling
 * The 'context'(PersonContext) has two components - Provider and Consumer (consumer 
 * isn't used  anymore since introduction on useContext hook) 
 */

const PersonContext = React.createContext();


const ContextAPI = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        });
    };

    return (
    <PersonContext.Provider value={{removePerson}}>
        <h2>Context API / useContext hook</h2>
        <List people={people}/>
    </PersonContext.Provider>
    );
};
/** Whatever is passed as 'value' property in PersonContext.Provider as above 
 * can be accessed in any child component.
 * 
 */


const List = ({people}) => {
    return <>
        {people.map((person) => {
            return <SinglePerson key={person.id} {...person}/>
        })}
    </>
};

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext);

    return <div className="item">
        <h3>{name}</h3>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>

};


export default ContextAPI;