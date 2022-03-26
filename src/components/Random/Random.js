import React from 'react';
import './Random.css'
const Random = ({ randomCart }) => {
    const { name, picture, } = randomCart
    return (
        <div>
            <div className='cart-items'>
                <img src={picture} alt="" />
                <h5 className='ms-3'>Name:{name}</h5>
            </div>
        </div>
    );
};

export default Random;