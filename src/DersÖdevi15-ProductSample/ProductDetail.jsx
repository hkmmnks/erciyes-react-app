import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import './styles.css';
function ProductDetail() {

    const { id } = useParams()

    var product = products.find(q => q.id == id)

    return (
        <>
            <h1>Product Detail:{product?.name} </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Supplier ID</th>
                        <th>Category ID</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Units In Order</th>
                        <th>Reorder Level</th>
                        <th>Discontinued</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product?.id}</td>
                        <td>{product?.supplierId}</td>
                        <td>{product?.categoryId}</td>
                        <td>{product?.unitPrice}</td>
                        <td>{product?.unitsInStock}</td>
                        <td>{product?.unitsOnOrder}</td>
                        <td>{product?.reorderLevel}</td>
                        <td>{product?.discontinued ? 'Yes' : 'No'}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ProductDetail