import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className='container items-container navBar'>
                <div>
                    <h1>BIRDS WORLD</h1>
                </div>
                <div className='items'>
                    <a href="/Home">Home</a>
                    <a href="/Birds">Cart</a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;