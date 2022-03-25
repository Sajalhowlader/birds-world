import React from 'react';

const Cart = ({ newcart }) => {
    const { name, price, picture } = newcart
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Cart;