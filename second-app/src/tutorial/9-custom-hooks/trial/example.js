import React from 'react';

//importing the useFetch custom hook
import { useFetch } from './customHook';


const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
    const {loading, data} = useFetch(url);

    console.log(data);
    return (
        <h2>{loading? 'Loading...':'Data'}</h2>
    )
}

export default Example;