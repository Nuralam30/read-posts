import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="navlist">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/help">Help</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;