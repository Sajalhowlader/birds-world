import React from 'react';
import './Random.css'
const Random = ({ randomCart }) => {
    const { name, picture, } = randomCart
    return (
        <div className="random-cart">
            <img src={picture} alt="" />
            <h5 className='ms-3'>Name:{name}</h5>
        </div>
    );
};

export default Random;