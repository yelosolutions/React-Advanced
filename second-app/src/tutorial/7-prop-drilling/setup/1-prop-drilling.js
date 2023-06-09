import React, {useState} from 'react';
import { data } from '../../../data';

/** Prop Drilling - passing data from parent to child component through 
    multiple levels of nesting(as the removeItem function in this case) 
 * - can be used in case of more components
 * - might be cumbersome
 * fix - context api, redux(for more complex cases)
*/

const PropDrilling = () => {
    const [people, setPeople] = useState(data);
    
    const removeItem = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };

    return <section>
        <h3>Prop Drilling</h3>
        <List people={people} removeItem={removeItem}/>
    </section> 
};

const List = ({people, removeItem}) => {
    return <>
    {people.map((person) => {
        return <SinglePerson 
            key={person.id} 
            {...person} 
            removeItem={removeItem}
        /> 
    })}
    </>
};

const SinglePerson = ({id, name, removeItem }) => {
    return <div className='item'>
        <h3>{name}</h3>
        <button onClick={() => removeItem(id)}>remove</button>
    </div>
};

export default PropDrilling;