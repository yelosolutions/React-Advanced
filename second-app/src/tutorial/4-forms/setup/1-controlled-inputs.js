import React, { useState } from 'react'

//Syntax is a little different from JS
//JS - const input = document.getElementById('id');
//const inputValue = input.value;

//React - value, onChange




const ControlledInputs = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');


    const submitForm = (e) => {
        e.preventDefault();
        console.log(firstName, email);
    };

    return <> 
    <article>
        <form className="form" onSubmit={submitForm}>
            <h2>Login</h2>
            <div className="form-control" >
                <label htmlFor="firstName">Name : </label>
                <input 
                    type="text"  
                    id='firstName' 
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"  
                    id='email' 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type='submit' >Add Person</button>
        </form>
    </article>
    </>
}
export default ControlledInputs;