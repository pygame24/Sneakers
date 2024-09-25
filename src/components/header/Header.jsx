// import logo from '/img/logo.svg';
// import cart from '/img/cart.svg';
// import heart from '/img/heart.svg';
// import user from '/img/user.svg';

const Header = (props) => {
    return (
        <header className="header">
            <div className='container'>
                <div className="header__row">
                    <div className="header__logo">
                        <img src="/img/logo.svg" alt="" />
                        <div className="header__info">
                            <h3>REACT SNEAKERS</h3>
                            <p>Магазин лучших кроссовок</p>
                        </div>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li onClick={props.onOpenedCart} className='header__nav-item'>
                                <a href="#!">
                                    <img src="/img/cart.svg" alt="" />
                                    <span className='active'>1205 руб.</span>
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a href="#!">
                                    <img src="/img/heart.svg" alt="" />
                                    <span>Закладки</span>
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a href="#!">
                                    <img src='/img/user.svg' alt="" />
                                    <span>Профиль</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;