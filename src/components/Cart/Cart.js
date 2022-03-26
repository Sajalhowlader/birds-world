import React from 'react';
import './Cart.css'
import { GrCart } from 'react-icons/gr';
const Cart = ({ newcart }) => {
    const { name, picture } = newcart
    return (
        <div>
            <div className='cart-items'>
                <img src={picture} alt="" />
                <h5 className='m-3'>Name:{name}</h5>
                <div>
                    <GrCart />
                </div>
            </div>
        </div>
    );
};

export default Cart;