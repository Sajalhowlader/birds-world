import React from 'react';
import './ShowBirds.css'
import { GrCart } from 'react-icons/gr';
const ShowBirds = ({ bird, cart }) => {

    const { name, price, picture, } = bird
    return (
        <div>
            <div className='card-container'>
                <img className='img-fluid' src={picture} alt="" />
                <h2>{name}</h2>
                <h3>{price}</h3>
                <button onClick={() => cart(bird)} className='cart-btn'>add <span className='text-white ms-2'> <GrCart /> </span> </button>
            </div>
        </div>

    );
};

export default ShowBirds;