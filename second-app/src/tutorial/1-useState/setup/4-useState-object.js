import React, { useState } from 'react';

/*
const UseStateObject = () => {
  return <h2>useState object example</h2>;
};

export default UseStateObject;
*/

//Create an object, render it and allow modification of its property 
const ChangeObjectProp = () => {
  //use useState to create and manage state variables
  const [person, setPerson] = useState(
    {
      id: 1, 
      name: 'Jay', 
      message: 'Yelo Solutions is coming up!'
    });
  
  
  // person.map((person) => {
  //   const {id, name, message } = person;
  //   id = setPerson()
  // })
  const changeMessage = (props) => {
    //const {id, name, message} = props
    setPerson({...person, message: 'What?'});
  };
  

  return <>
  <h2>useState object example</h2>
  <h4>{person.id}</h4>
  <h4>{person.name}</h4>
  <h4>{person.message}</h4>
  <button type='button' className='btn' onClick={() => changeMessage()}>Change Message</button>
  </>;
};

export default ChangeObjectProp;