// import removeBtn from '../../img/remove-btn.svg';

import { useState } from "react";

const CartItem = ({ imgUrl, title, price, onRemoveItem }) => {
    
    return (
        <div className="cartItem">
            <div className="cartItem__content">
                <img src={imgUrl} alt="" />
                <div className="cartItem__text">
                    <h3>{title}</h3>
                    <p>{price} руб.</p>
                </div>
            </div>
            <button onClick={onRemoveItem} className='cartItem__btn-remove'><img src="/img/remove-btn.svg" alt="" /></button>
        </div>
    );
};

export default CartItem;