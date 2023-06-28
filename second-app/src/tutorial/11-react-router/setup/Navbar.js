import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h3>
                Navbar
            </h3>
            <ul>
                <li className='nav-link'>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to='people'>People</Link>
                </li>
                <li>
                    <Link to='people/person'>Person</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;