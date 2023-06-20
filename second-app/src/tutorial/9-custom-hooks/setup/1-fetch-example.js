import React from 'react';

/** import the useFetch custom hook(should have 'use' 
 * before the hooks name -Fetch-)
*/
import { useFetch } from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  //destructuring the object returned by the useFetch custom hook 
  const {loading, products} = useFetch(url);
  
  console.log(products);

  return <div>
    <h2>{loading? 'Loading ...': 'Data'}</h2>
  </div>
};
export default Example;

/**Goal:
 * Try to come up with fuctionality that I can reuse.
 */