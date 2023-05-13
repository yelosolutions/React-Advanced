import React, { useState } from 'react';

//demonstates use of useState hook in creating a counter
const UseStateValue = () => {
  const [value, setValue] = useState(0);
  
  const increaseValue = () =>{
    setValue(value + 1);
  };

  // const DecreaseValue = () =>{
  //   setValue(value - 1);
  // } 

  const reset = () =>{
    setValue(0);
  };

  
  const complexIncrease = () =>{
    setTimeout(() => {
      //setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  };


  return <>
  <h2>useState counter example</h2>
  {/* remember camelCase - marginTop instead of margin-top */}
  <section style={{marginTop: '4rem' }}>
    <h3>Regular Counter</h3>
    <h2>{value}</h2>
    <button type="button" className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
    <button type="button" className="btn" onClick={() => reset()}>Reset</button>
    <button type="button" className="btn" onClick={() => increaseValue()}>Increase</button>
  </section>
  
  <section style={{marginTop: '4rem'}}>
    <h3>More Complex Counter</h3>
    <h2>{value}</h2>
    <button type="button" className="btn" onClick={() => complexIncrease()}>Increase Later</button>
  </section>
  </>
};

export default UseStateValue;