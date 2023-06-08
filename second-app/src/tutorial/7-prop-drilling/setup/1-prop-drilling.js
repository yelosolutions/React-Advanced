import React, {useState} from 'react';
import { data } from '../../../data';

//propdrilling - in case of more conponents
//fix - context api, redux(for more complex cases)

const PropDrilling = () => {
    const [people, setPeople] = useState(data);
    
    // const removeItem = (id) => {
    //     setPeople(people.filter((person) => id !== person.id));
    // };

    return <section>
        <List people={people}/>
    </section> 
};

const List = ({                                                                                                 people}) => {
    return (<>
    {people.map((person) => {
        const {id, name} = person;
        return <div key={id} className="item">
            <h4>{name}</h4>
            <button>Remove</button>
        </div>
    })}
    </>
    );
};

export default PropDrilling;