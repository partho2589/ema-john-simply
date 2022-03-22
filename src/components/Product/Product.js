import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
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
            <button className='btn-card'>
                <p>Add to card</p>
            </button>
        </div>
    );
};

export default Product;