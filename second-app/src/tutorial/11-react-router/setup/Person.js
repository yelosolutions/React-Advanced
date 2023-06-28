import React from 'react';

const Person = ({name}) => {
    return (
        <article className='item'>
            <h4>{name}</h4>
        </article>
    );
};

export default Person;