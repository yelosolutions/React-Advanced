import React from 'react';

// a custom hook - fetches data from api using its url
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';
import Product from './Product'; 

const url = 'https://course-api.com/javascript-store-products';

const Index = () => {
    const { products } = useFetch(url);

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