import React from 'react';

const ErrorExample = () => {
  let heading = 'Yelo Solutions';

  const clickHandler = () => {
    heading = 'Must be new';
    console.log(heading);
  };

  return ( 
  <React.Fragment>
    <h2>useState error example</h2>
    <h1>{heading}</h1>
    <button type='button' className='btn' onClick={clickHandler}>Change Heading</button>
  </React.Fragment>
  );
};

export default ErrorExample;