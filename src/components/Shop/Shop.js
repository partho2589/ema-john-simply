import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>this is product: {product.length}</h1>
            </div>
            <div className="card-container">
                <h3>this is card</h3>
            </div>
        </div>
    );
};

export default Shop;