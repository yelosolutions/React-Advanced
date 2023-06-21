import React from 'react';
import PropTypes from 'prop-types';
import defaultPicture from '../../../assets/default-image.jpeg';

/***
 * PropTypes 
 * - check if there are undefined properties
 * - In order to set up PropTypes, set up PropTypes properties first 
 *  on the component
*/

//the product component
const Product = ({fields}) => {  
    const {image, name, company} = fields;

    /***using the AND operator - set up a variable
     * if the image is there only then, get the url
    */
    const url = image[0] && image[0].url;

    return (
        <article className='product'>
            <img src={url || defaultPicture} alt={fields.name} />
            <h4>{name || 'a couch'}</h4>
            <p>{company || 'ikea'}</p>
        </article>
    );
};

//PropTypes properties
Product.propTypes = {
    fields: PropTypes.object,
    image: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
};

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };




export default Product;