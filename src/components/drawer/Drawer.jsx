import CartItem from '../cartItem/CartItem';

// import arrow from '../../img/arrow.svg';
// import removeBtn from '../../img/remove-btn.svg';

const Drawer = ({ onClose, cartItems = [] }) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h3>
                    Корзина
                    <button onClick={onClose} className='cartItem__btn-remove'><img src="/img/remove-btn.svg" alt="" /></button>
                </h3>

                <div className="cartItems">
                    {cartItems.map((item) => 
                        <CartItem 
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}
                    />)}
                </div>
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
        </div>
    );
};

export default Drawer;