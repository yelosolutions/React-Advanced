import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h2>
                Navbar
            </h2>
            <ul>
                <li className='nav-link'>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;