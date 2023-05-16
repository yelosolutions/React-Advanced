import React, {useState, useEffect} from 'react'

//useEffect hook basics
const UseEffectTry = () => {
  const [value, setValue] = useState(0);

  //allows side-effects
  useEffect(() => {
    //useEffect is called after every render by default
    console.log('useEffect call');
    
    //conditionals can only be used inside the call function
    if(value >= 1){
      //useEffect allows manipulation of DOM elements
      document.title = `New Messages(${value})`
    }
  }, [value]); //value is the dependency(in 2nd parameter - a list)


  useEffect(()=>{
    console.log('Hello World');
  }, []);  //empty list of deps( useEffect will only run on initial render)
  
  console.log('Render');
  return (
    <>
    <h2>useEffect </h2>
    <h2>{value}</h2>
    <button className='btn' onClick={() => setValue(value + 1)}> Click Me</button>
    </>
  );
};

export default UseEffectTry