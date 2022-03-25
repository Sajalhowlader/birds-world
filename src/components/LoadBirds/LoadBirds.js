import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowBirds from '../ShowBirds/ShowBirds';
import './LoadBirds.css'

const LoadBirds = () => {
    const [birds, setBirds] = useState([])
    const [carts, setCurt] = useState([])
    useEffect(() => {
        fetch('birds.json')
            .then(res => res.json())
            .then(data => setBirds(data))
    }, [])
    const mycart = birds => {
        const newcart = [...carts, birds]
        setCurt(newcart)
    }
    return (
        <div className='grid-main-container'>

            <div>
                <h1 className='text-center bitd-title'>BIRDS</h1>
                <div className='grid-container  row g-4 '>
                    {
                        birds.map(bird => <ShowBirds key={bird.id} bird={bird} cart={mycart}></ShowBirds>)
                    }
                </div>
            </div>

            <div className='my-cart'>

                <div className='cart'>
                    <h2>My Cart</h2>
                    <div>
                        {
                            carts.map(cart => <Cart key={cart.id} newcart={cart}></Cart>)
                        }
                    </div>
                    <div className='btn-head'>
                        <button className='choose-btn'>CHOOSE 1 FOR ME</button>
                        <button className='choose-btn'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadBirds;