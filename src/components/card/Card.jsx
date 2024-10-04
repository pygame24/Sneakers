import {useState} from 'react';


// import btnAdd from '/img/btn-add.svg';
// import btnAdded from '/img/added.svg';
// import btnHeart from '/img/btn-heart.svg';
// import btnHeart2 from '/img/heart2.svg';

const Card = ({ imgUrl, title, price, onFavorite, onAdd}) => {
    const [isHeart, setHeart] = useState(false);
    const onClickHandlerHeart = () => {
        onFavorite({ title, price, imgUrl });
        setHeart(() => !isHeart);
    };

    const [isAdd, setAdd] = useState(false);
    const onClickHandlerAdd = () => {
        onAdd({ title, price, imgUrl });
        setAdd(() => !isAdd)
    };

    return (
        <div className="card">
            <div className="card__container">
                <img className='card__img' src={imgUrl} alt="Sneaker"/>
                <a href='#!' className="card__btn-heart" onClick={onClickHandlerHeart}>
                    <img src={isHeart ? '/img/heart2.svg' : '/img/btn-heart.svg'} alt="" />
                </a>
                <div className="card__title">
                    {title}
                </div>
                <div className="card__info">
                    <div className="card__price">
                        <h3>Цена:</h3>
                        <p>{price} руб.</p>
                    </div>
                    <button className='card__btn-add' onClick={onClickHandlerAdd}>
                        <img src={isAdd ? '/img/added.svg' : '/img/btn-add.svg'} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;