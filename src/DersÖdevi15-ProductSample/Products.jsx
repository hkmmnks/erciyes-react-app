import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './styles.css';

function Products() {
    return (
        <>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr key={item.id}>
                            <td><Link to={`/products/${item.id}`}>{item.id}</Link></td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Products