import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>
                <p>Selected Items: {props.card.length}</p>
        </div>
    );
};

export default Cart;