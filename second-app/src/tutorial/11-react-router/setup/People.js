import React, { useState, useEffect } from 'react';
import Person from './Person';
import { data } from '../../../data'

const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setPeople(data);
        setLoading(false);
    }, []);

    console.log(people);

    return (
        <section>
            {loading? (<h2>Loading ...</h2>)
            : 
            (people.map((person) => {
                return <Person key={person.id} {...person}/>
            }))}
            {/* <Person/> */}
        </section>
    );
};

export default People;


