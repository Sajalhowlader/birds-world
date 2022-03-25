import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className='container d-flex justify-content-between align-items-center items-container'>
                <div>
                    <h1>BIRDS WORLD</h1>
                </div>
                <div className='items'>
                    <a href="/Home">Home</a>
                    <a href="/Birds">Birds</a>
                    <a href="/Items">Items</a>
                    <a href="/Contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;