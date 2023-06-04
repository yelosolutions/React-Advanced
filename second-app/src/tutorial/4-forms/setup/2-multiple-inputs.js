import React, {useState} from 'react'

const MultipleInputs = () => {
    const [person, setPerson] = useState({
        firstName : '',
        email: '',
        age: ''
    });

    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
        if (person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()};
            setPeople([...people, newPerson])
            setPerson({firstName:'', email: '', age: ''})
        }
        // setPerson((person) => {
        //     const {firstName, email, age} = person;
        // });
    }


    return (
        <article>
            <form 
                className='form' 
                action="" 
                onSubmit={handleSubmit}
            >
                <div className='form-control'>
                    <label className='font-bold' htmlFor="text">Name</label>
                    <input 
                        className='input-style'
                        id='firstName'
                        name='firstName'
                        type="text"
                        value={person.firstName}
                        onChange={handleChange}
                    />    
                </div>
                <div className='form-control'>
                    <label className='font-bold' htmlFor="email">Email</label>
                    <input 
                        className='input-style'
                        id='email'
                        name='email'
                        type="email"
                        value={person.email}
                        onChange={handleChange}
                        required
                    />    
                </div>
                <div className='form-control'>
                    <label className='font-bold' htmlFor="number">Age</label>
                    <input 
                        className='input-style' 
                        type="number"
                        name='age'
                        id="age"
                        value={person.age}
                        onChange={(e) => handleChange(e)}
                    />    
                </div>
                

                <button type='submit' className='inline-block bg-gray-800 mt-4 p-1 capitalize rounded-md cursor-pointer text-white'>
                    Add person
                </button>
            </form>
            {people.map((person, index) =>{
                return <div key={index} className='grid grid-cols-3 gap-2 bg-white p-2 mb-3 con'>
                    <h3 className='font-bold'>{person.firstName} </h3>
                    <h4>{person.age}</h4>
                    <p>{person.email}</p>
                </div>
            })}
            <button type='button' className='inline-block bg-gray-800 mt-4 p-1 capitalize rounded-md cursor-pointer text-white'
            onClick={() => setPeople([])}>
                Remove All
            </button>
            
        </article>
    )
}

export default MultipleInputs