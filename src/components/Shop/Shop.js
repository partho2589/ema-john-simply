import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useState([]);
    const [card, setCard ] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])


    const handelAddToCard = (product) =>{
        console.log(product)
        const newCard = [...card, product]
        setCard(newCard)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                 {
                     product.map(product => <Product 
                     product = {product}
                     key = {product.id}
                     handelAddToCard = {handelAddToCard}
                     ></Product>)
                 }
            </div>
            <div className="card-container">
                <h3>Order Summary</h3>
                <p>Selected Items: {card.length}</p>
            </div>
        </div>
    );
};

export default Shop;