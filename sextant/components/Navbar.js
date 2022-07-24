import React from 'react';
import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {
    return (
        <div className='Navbar'>
            <img src={ logo } className="App-logo" alt="logo"></img>
            <h1 className='Title'>SEXTANT</h1>
        </div>
    )
}
