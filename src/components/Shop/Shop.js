import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useProducts([]);
    const [cart, setCart ] = useState([])
    // useEffect(() => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data =>setProduct(data))
    // },[])

    useEffect(() => {
        const storedCart = getStoredCart()
        const saveValue = [];
        for(const id in  storedCart){
            const addedProduct = product.find(product=> product.id === id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveValue.push(addedProduct)
            }
        }
        setCart(saveValue)
    },[product])

    const handelAddToCart = (product) =>{
        
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                 {
                     product.map(product => <Product 
                     product = {product}
                     key = {product.id}
                     handelAddToCart = {handelAddToCart}
                     ></Product>)
                 }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;