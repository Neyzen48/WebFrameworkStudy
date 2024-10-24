// src/pages/Products.js
import React, { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') // Beispiel-API
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <main>
            <h2>Unsere Produkte</h2>
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </main>
    );
}

export default Products;
