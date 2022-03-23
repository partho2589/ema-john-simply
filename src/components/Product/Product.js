import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {name, img,price,ratings,seller } =props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacture: {seller}</small></p>
                <p><small>Rating: {ratings} </small></p>
                
            </div>
            <button onClick={ () => props.handelAddToCart(props.product)} className='btn-card'>
                <p className=' btn-name'>Add to card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;