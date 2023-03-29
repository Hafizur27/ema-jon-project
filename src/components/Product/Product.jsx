import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='productCard'>
            <img className='img' src={img} alt="" />
            <div>
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <caption>Manufacture:{seller}</caption>
            <caption>Rating: {ratings} star</caption>
            </div>
            <button className='btnCart'>Add to Cart</button>
        </div>
    );
};

export default Product;