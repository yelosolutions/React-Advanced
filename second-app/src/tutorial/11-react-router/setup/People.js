import React, { useState, useEffect } from 'react';
//import Person from './Person';
import { data } from '../../../data'
import { Link } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setPeople(data);
        setLoading(false);
    }, []);


    return (
        <section>
            {loading? (<h2>Loading ...</h2>)
            : 
            (people.map((person) => {
                return <div key={person.id} className='item'>
                    <h3>{person.name}</h3>
                    <Link to={`/person/${person.id}`}>Learn More</Link>
                </div>
            }))}
        </section>
    );
};

export default People;


