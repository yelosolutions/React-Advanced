import { useState, useEffect } from 'react';

//a custom hook - useFetch
export const useFetch = (url) => {
    const [data, setData] = useState(url);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        const getData = async() => {
            const response = await fetch(url);
            const peopleList = await response.json()
            setData(peopleList);
            setLoading(false);
        };
        getData();
    }, [url]);

    return (
        {loading, data}
    );
};


/**
 * The ERROR below:
 * WARNING in [eslint]
    src\tutorial\9-custom-hooks\trial\customHook.js
    Line 17:8:  React Hook useEffect has a missing dependency: 'getData'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

 * Solution:
 * The "react-hooks/exhaustive-deps" rule warns us when we have a missing dependency
    in an effect hook. 
 * To get rid of the warning, move the function or variable declaration inside of 
    the useEffect hook, memoize arrays and objects that change on every render or 
    disable the rule.
 */