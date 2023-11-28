import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ProductsDetail() {
    const [detail, setdetail] = useState({})
    const [loading, setloading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products/' + id)
            .then(res => {
                setdetail(res.data)
                setloading(false)
            })
    })

    return (
        <>
            <button><Link to="/products">Go Back</Link></button>
            {
                loading ? <h1>loading...</h1> : <><h1>Detail</h1>
                    <h2 id='tek'>ID: {detail?.id}</h2>
                    <h2 id='çift'>Supplier ID: {detail?.supplierId}</h2>
                    <h2 id='tek'>Category ID: {detail?.categoryId}</h2>
                    <h2 id='çift'>Unit Price: {detail?.unitPrice}</h2>
                    <h2 id='tek'>Unit Stock: {detail?.unitsInStock}</h2>
                    <h2 id='çift'>Discontinued: {detail?.discontinued ? 'Yes' : 'No'}</h2>
                    <h2 id='tek'>Name: {detail?.name}</h2></>
            }
        </>
    )
}

export default ProductsDetail