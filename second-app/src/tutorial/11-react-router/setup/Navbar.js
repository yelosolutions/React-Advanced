import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <h2>
                Navbar
            </h2>
            <ul>
                <li className='nav-link'>
                    <a href="/">
                        <h4>Home</h4>
                    </a>
                </li>
                <li>
                    <a href='about'>
                        <h4>About</h4>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;