import React from 'react';
import './ShowBirds.css'
import { GrCart } from 'react-icons/gr';
const ShowBirds = ({ bird, cart }) => {

    const { name, price, picture, } = bird
    return (

        <div className='card-container col-12 col-md-4'>
            <img className='img-fluid' src={picture} alt="" />
            <h2>Name:{name}</h2>
            <h3>Price:{price}</h3>
            <button onClick={() => cart(bird)} className='cart-btn'>Add Your Cart <span className='text-white ms-2'> <GrCart /> </span> </button>
        </div>

    );
};

export default ShowBirds;