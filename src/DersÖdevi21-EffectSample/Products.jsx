import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Styles.css';


function Products() {
    const [products, setproducts] = useState([])

    useEffect(() => {
        loadProducts()
    })

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })
    }

    const deleteProducts = (id) => {
        var isDelete = window.confirm('Are you sure?')
        if (!isDelete) return;
        axios.delete('https://northwind.vercel.app/api/products/' + id)
            .then(() => {
                loadProducts()
            })
    }


    return (
        <>
            <h1>Products Length: {products.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Unit Stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => <tr>
                            <td><Link to={`/products/${item.id}`}>{item.id}</Link></td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteProducts(item.id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}

export default Products