import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Random from '../Random/Random';
import ShowBirds from '../ShowBirds/ShowBirds';
import './LoadBirds.css'

const LoadBirds = () => {
    const [birds, setBirds] = useState([])
    const [carts, setCurt] = useState([])
    const [randomCart, setRandocart] = useState([])
    useEffect(() => {
        fetch('birds.json')
            .then(res => res.json())
            .then(data => setBirds(data))
    }, [])
    const mycart = birds => {
        const newcart = [...carts, birds]

        if (newcart.length === 5) {
            alert("You can selected only 4 items")
        } else {

            setCurt(newcart)
        }
    }
    const getrandomCart = () => {
        const randomCart = carts[Math.floor(Math.random() * carts.length)];

        if (randomCart === undefined) {
            alert("Please select something")
        } else {
            setRandocart(randomCart)
        }
    }


    const removeCart = () => {
        const carts = []
        setCurt(carts)
    }


    return (
        <div className='grid-main-container d-flex flex-sm-column flex-lg-row'>

            <div>
                <h1 className='text-center bitd-title'>BIRDS</h1>
                <div className='grid-container row g-4 '>
                    {
                        birds.map(bird => <ShowBirds key={bird.id} bird={bird} cart={mycart} ></ShowBirds>)
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

                        <button onClick={() => getrandomCart()} className='choose-btn'>CHOOSE 1 FOR ME</button>

                        <button onClick={() => removeCart()} className='choose-btn'>CHOOSE AGAIN</button>

                    </div>
                    <div>
                        <Random randomCart={randomCart}></Random>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadBirds;