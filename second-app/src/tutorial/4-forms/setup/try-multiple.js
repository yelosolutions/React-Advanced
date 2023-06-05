import React, { useState } from 'react'

const TryMultiple = () => {
    const [person, setPerson] = useState({
        firstName: '',
        email: '',
        age: ''
    });
    
    const [people, setPeople] = useState([]);


    
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        //dynamic object properties
        setPerson({...person, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
        if(person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()}; 
            setPeople([...people, newPerson]);
            setPerson({firstName: '', email: '', age: ''});
        }
        
    };


    return (
        <article>
            <form 
            className='form'
            onSubmit={handleSubmit}
            action=""
            >
                <div className="form-control">
                    <label className='label-style'
                    htmlFor="firstName"
                    >
                    Name
                    </label>
                    <input className='input-style'
                    type="text"
                    placeholder='First Name'
                    value={person.firstName}
                    name='firstName'
                    onChange={handleOnChange}
                    />
                </div>
                <div className="form-control">
                    <label className='label-style' 
                    htmlFor="email"
                    >Email</label>
                    <input className='input-style'
                    type="email"
                    placeholder='Email'
                    value={person.email}
                    name='email'
                    onChange={handleOnChange}
                    />
                </div>
                <div 
                className="form-control">
                    <label className='label-style'
                    htmlFor="age"
                    >
                    Age
                    </label>
                    <input className='input-style'
                    type="number"
                    placeholder='Age'
                    value={person.age}
                    name='age'
                    onChange={handleOnChange} 
                    />
                </div>
                <button className='btn'
                type='submit'
                >
                    Add Person
                </button>
            </form>
            {people.map((person) => {
                const {id, firstName, email, age} = person;
                return <div key={id} className="w-auto flex content-between gap-4 bg-white rounded-md p-1">
                <h3>{firstName}</h3>
                <h4>{email}</h4>
                <p>{age}</p>
            </div>
            })}
            
            
        </article>
    )
}

export default TryMultiple