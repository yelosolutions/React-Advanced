import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { data } from '../../../data'

//use useParams hook  - allows access to parameters 

const Person = () => {
    const [name, setName] = useState('Default Name');
    const {id} = useParams();

    useEffect(() => {
        const newPerson = data.find((person) => person.id === parseInt(id));
        setName(newPerson.name);
    }, []);

    return (
        <div>
            <h1>{name}</h1>
            <Link to='/people' className='btn'>
                Back to people
            </Link>
        </div>
    );
};

export default Person;