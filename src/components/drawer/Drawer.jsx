import CartItem from '../cartItem/CartItem';

// import { useEffect, useState } from 'react';
import axios from 'axios';

// import arrow from '../../img/arrow.svg';
// import removeBtn from '../../img/remove-btn.svg';

const Drawer = ({ onClose, cartItems = [], setCartItems }) => {

    const onRemoveItem = (id) => {
        axios.delete(`https://66b5c210b5ae2d11eb6490c0.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        // console.log(id)
    }

    return (
        <div className="overlay">
            <div className="drawer">
                <h3>
                    Корзина
                    <button onClick={onClose} className='cartItem__btn-remove'><img src="/img/remove-btn.svg" alt="" /></button>
                </h3>

                <div className="cartItems">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div>
                                <CartItem
                                    key={item.id}
                                    title={item.title}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    onRemoveItem={() => onRemoveItem(item.id)}
                                />
                                <ul className='drawer__list'>
                                    <li className='drawer__item'>
                                        <span>Итого:</span>
                                        <div></div>
                                        <p>21 498 руб.</p>
                                    </li>
                                    <li className='drawer__item'>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <p>1074 руб.</p>
                                    </li>
                                </ul>
                                <button className="drawer__btn">
                                    Оформить заказ
                                    <img src="/img/arrow.svg" alt="" />
                                </button>
                            </div>
                        ))
                    )
                        :
                        <div className='cartEmpty'>
                            <img src="../../../public/img/empty-cart.svg" alt="" />
                            <h2>Корзина пустая</h2>
                            <p>Добавьте хотя бы одну пару кроссовок, чтобы слелать заказ.</p>
                            <button className='drawer__btn greenButton' onClick={() => onClose()}>
                                <img src="../../../public/img/arrow.svg" alt="Arrow" />
                                Вернуться назад
                            </button>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Drawer;