// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/about">Über Uns</Link></li>
                <li><Link to="/products">Produkte</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
