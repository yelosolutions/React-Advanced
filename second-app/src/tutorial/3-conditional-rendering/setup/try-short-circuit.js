import React, { useState, useEffect } from 'react';


const TryShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);

    //short circuit 
    //using || - returns first truthy value if all are falsy
    //const someText = text || 'John Doe';



    return <>
    <h2>{text || 'John Doe'}</h2>
    <button className='btn' onClick={() => setIsError(!isError)}> Toggle Error</button>
    {isError? (<div> <h2> There is an Error...</h2> </div> ) : (<div> <h2> There is NO Error...</h2> </div> ) }
    </>
};

export default TryShortCircuit;