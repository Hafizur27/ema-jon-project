import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const btn = props.btn;
    
    return (
        <div className='productCard'>
            <img className='img' src={img} alt="" />
            <div>
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <caption>Manufacture:{seller}</caption>
            <caption>Rating: {ratings} star</caption>
            </div>
            <button onClick={() => btn(props.product)} className='btnCart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;