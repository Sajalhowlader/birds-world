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
        <div >

            <div className='grid-main-container d-flex flex-sm-column flex-lg-row' >
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

            <div className='question'>
                <h1 className='text-center mb-4'>How React Works</h1>

                <strong>

                    React is a javascript library that makes a user interface. When we write code under the react components it will compile raw javascript helping by babel. it makes a virtual dom and compares our real dom. When we write code the virtual dom compares with our real dom and shows the output. The JSX gets converted to React.CreateElement by the function call. Each of the functions returns an object similar to the object.
                    If we write a function with vanilla javascript like a counter. when we call the function in a different file the JScode repeat. But we can solve it easily by making react components. It's easy and readable.React Dom: React generate or make our code and react DOM render the code fow show.when we use react in our mobile react Dom convert to react native
                </strong>
            </div>
            <div className='question'>
                <h1 className='text-center mb-4'>Props Vs State</h1>
                <div className=' d-flex m-3 '>
                    <div>
                        <strong >
                            <h3 >Props</h3>
                            01. Props are read-only <br />
                            02. Props are immutable <br />
                            03. Props can be accessed by child components.<br />
                            04. Stateless component can have Props<br />
                            05. Props make components reusable.<br />
                            06.Props are used to communicate between components
                        </strong>
                    </div>
                    <div>
                        <strong>
                            <h3>State</h3>
                            01. State change can be asynchronous.<br />
                            02. State is mutable.<br />
                            03. State cannot be accessed by child Components.<br />
                            04. Stateless components cannot have State.<br />
                            05. State cannot make components by reusable.<br />
                            06. States can be used for rendering dynamic changes with the components</strong>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LoadBirds;