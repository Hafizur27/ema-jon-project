import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        console.log(product)
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 10/100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h5 className='cartDetails'>Order Summary</h5>
            <div>
                <p>Selected Item: {cart.length}</p>
                <p>Total price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>


            </div>
        </div>
    );
};

export default Cart;