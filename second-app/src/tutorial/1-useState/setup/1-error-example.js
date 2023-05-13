import React from 'react';

const ErrorExample = () => {
  let heading = 'Yelo Solutions';

  const clickHandler = () => {
    heading = 'This is new';
    console.log(heading);
  };

  return ( 
  <React.Fragment>
    <h2>useState error example</h2>
    <h1>{heading}</h1>
    <button type='button' className='btn' onClick={clickHandler}>
      Change Heading
    </button>
  </React.Fragment>
  );
};

/**
 * Reason why the value of heading doesn't change on click:
 * 1. Not re-rendering the component
 * 2. There is no way to preserve the value between the renders
 * Solution
 * 1. Using the useState hook
 */

export default ErrorExample;