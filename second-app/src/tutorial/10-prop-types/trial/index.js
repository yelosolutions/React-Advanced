import React from 'react';

//importing the useFetch hook - returns an object {loading, products}
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

import Product from './Product';

/**
 * * Props -  read-only properties that are shared between components to give 
    the unidirectional flow of React a dynamic touch.
 * PropTypes -  a mechanism that ensures that the passed value is of the correct datatype. 
*/
const url = 'https://course-api.com/javascript-store-products';

const Index = () => {
    const {products} = useFetch(url);

    return (
        <div>
            <h2>Products</h2>
            <section className='products'>
                {products.map((product) => {
                    return <Product key={product.id} {...product}/>
                })}
            </section>
        </div>
    );
};

export default Index;