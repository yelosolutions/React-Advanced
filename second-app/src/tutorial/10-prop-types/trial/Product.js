import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'


const Product = ({fields}) => {
    const {company, name, image} = fields;
    // console.log(fields);

    //using AND to return image url only if image exists 
    const url = image[0] && image[0].url;

    return (
        <article className='product'>
            <img src={url || defaultImage} alt={name} />
            <p>{company || 'ikea'}</p>
            <h4>{name || 'just a couch' }</h4>
        </article>
    )
};

//defining proTypes properties
//datatypes and classes used to check props.
Product.propTypes = {
    company: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.array
};


export default Product;