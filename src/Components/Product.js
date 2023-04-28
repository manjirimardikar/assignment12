import React, { useState, useEffect } from 'react'
import '../CSS_files/Product.css'
const Product = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch('https://fakestoreapi.com/products')
            const res = await api.json()
            setProduct(res)
        }
        fetchData()
    }, [])
    return (
        <>
            <div className='product'>
                {product.lenght > 0 ? <h1>Data not Fetch</h1>
                    :
                    product.map((ele) => {
                        return <div key={ele.id} className="card">
                            <img src={ele.image} alt="" />
                            <h2>{ele.category}</h2>
                            <p>Price: {ele.price} $</p>
                            <span>Free delivery</span>
                            <button>ADD TO CART</button>
                        </div>

                    })
                }

            </div>
        </>
    )
}

export default Product
 