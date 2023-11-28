import React, { useState } from 'react';
import { productsData } from '../data/stateProducts';
import './Styles.css';

function ProductFilter() {
    const [products, setProducts] = useState(productsData);

    const showAllProducts = () => {
        setProducts(productsData);
    };

    const showCriticalStock = () => {
        const criticalStockProducts = productsData.filter(
            (product) => product.unitsInStock <= 5
        );
        setProducts(criticalStockProducts);
    };

    const showCheapProducts = () => {
        const cheapProducts = productsData.filter(
            (product) => product.unitPrice < 20
        );
        setProducts(cheapProducts);
    };

    const showExpensiveProducts = () => {
        const expensiveProducts = productsData.filter(
            (product) => product.unitPrice >= 100
        );
        setProducts(expensiveProducts);
    };

    const deleteProduct = (id) => {
        var isDeleted = window.confirm("Are you sure?")
        if (isDeleted) {
            var filteredProducts = products.filter(q => q.id !== id)
            setProducts(filteredProducts)
        }
    }

    return (
        <>
            <h1>Product: {products.length}</h1>
            <button onClick={showCriticalStock}>Show Critical Stock</button>
            <button onClick={showAllProducts}>Show ALL</button> <br />
            <button onClick={showCheapProducts}>Cheap</button>
            <button onClick={showExpensiveProducts}>Expensive</button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Stock</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ProductFilter;
