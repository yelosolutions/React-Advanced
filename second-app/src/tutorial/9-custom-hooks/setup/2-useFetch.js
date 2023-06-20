import {useState, useEffect } from 'react'


/**
 * useFetch - a custom hook that fetch data from a url 
 * and returns :
 * An object with:
 * - a loading state value
 * - a products state value(list of product objects) 
*/
export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        const response = await fetch(url);
        const newProducts = await response.json();
        setProducts(newProducts);
        setLoading(false);
    };

    /**
     * call useEffect when url changes
     * run once on render(invoke the function) and when argument is changed(url)
    */
    useEffect(() => {
        getProducts();
        
        //
    }, [url]);

    //returns an object
    return { loading, products };
};

