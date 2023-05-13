import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  
  const IncreaseCounter = () =>{
    setCounter(counter + 1);
  }
  const DecreaseCounter = () =>{
    setCounter(counter - 1);
  }
  const ResetCounter = () =>{
    setCounter(0);
  }

  const [counter2, setCounter2] = useState(0);
  const LaterCounter = () =>{
    setCounter2(counter2 + 2);
  }


  return <>
  <h2>useState counter example</h2>
  <h3>Regular Counter</h3>
  <h2>{counter}</h2>
  <button type="button" className="btn" onClick={() => IncreaseCounter()}>Increase</button>
  <button type="button" className="btn" onClick={() => ResetCounter()}>Reset</button>
  <button type="button" className="btn" onClick={() => DecreaseCounter()}>Decrease</button>
  <h3>More Complex Counter</h3>
  <h2>{counter2}</h2>
  <button type="button" className="btn" onClick={() => LaterCounter()}>Increase Later</button>
  </>
};

export default UseStateCounter;