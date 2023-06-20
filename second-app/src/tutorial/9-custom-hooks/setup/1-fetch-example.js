import React, { useState, useEffect } from 'react';

const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);

  const getProducts = async() => {
    const response = await fetch(url);
    const newProducts = await response.json();
    setProducts(newProducts);
    setLoading(false);
  };

  console.log(products);



  useEffect(() => {
    getProducts();
  }, []);

  if(loading){
    return <section>
      <h1>Loading ...</h1>
    </section>
  }
  const {id, fields} = products[value];
  return (
    <article key={id}>
      <img src={fields.image.url} alt="" />
      <h4>{fields.company}</h4>
    </article>
  )
};
export default Example;