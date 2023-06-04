import React, { useState } from 'react'

//Syntax is a little different from JS
//JS - const input = document.getElementById('id');
//const inputValue = input.value;

//React - value, onChange




const ControlledInputs = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');



    //create a list of users
    const [people, setPeople] = useState([]);


    const handelSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            const person = { id: new Date().getTime().toString(),
                firstName, email
            };
            setPeople((people) => [...people, person]);
            setFirstName('');
            setEmail('');
        }
        
    };

    return( 
    <article>
        <form className="form" onSubmit={handelSubmit}>
            <h2>Login</h2>
            <div className="form-control" >
                <label className='font-bold' htmlFor="firstName">Name </label>
                <input className='bg-gray-300 rounded-md p-1 w-full' 
                    type="text"  
                    id='firstName' 
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label className='font-bold' 
                    htmlFor="email"
                >Email
                </label>
                <input className='bg-gray-300 rounded-md p-1 w-full'
                    type="text"  
                    id='email' 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type='submit' >Add Person</button>
        </form>

        {people.map((person) => {
            const {id, firstName, email} = person;
            return <div key={id} className='flex bg-white mb-3 items-center text-center gap-16 rounded-md p-2'>
                <h3 className='left-2 font-bold'>{firstName}</h3>
                <p className='font-semibold text-black text-lg'>{email}</p>
            </div>
        })}
        <button onClick={() => setPeople([])} className='w-12 p-1 bg-slate-800 text-white rounded-md'> Clear</button>
    </article>
    )
}
export default ControlledInputs;