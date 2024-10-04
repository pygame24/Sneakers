import { useState, useEffect } from 'react';
// useEffect
// import search from '/img/search.svg';

import Card from '../card/Card';
// import sneakers from '../../data-sneakers';

import axios from 'axios';

import { apiKey } from '../../apikey';

const Sneakers = ({ setCartItems }) => {
    const [items, setItems] = useState([]);
    const [onFavorite, setOnFavorite] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        // fetch('https://66b5c210b5ae2d11eb6490c0.mockapi.io/items')
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         setItems(data);
        //     })

            axios.get(`${apiKey}items`)
                .then((res) => setItems(res.data));
            axios.get(`${apiKey}cart`)
                .then((res) => setCartItems(res.data));
    }, []);

    const onAddToCart = (obj) => {
        axios.post(`${apiKey}cart`, obj);
        setCartItems((prev) => [...prev, obj]);
    }

    const onAddToFavorite = (obj) => {
        // axios.post('', obj);
        setOnFavorite((prev) => [...prev, obj]);
    }

    
    const onChangeSearchValue = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    const onClearInput = () => {
        setSearchValue('')
    }

    return (
        <div className="sneakers">
            <div className="container">
                <div className="sneakers__text">
                    <div className="sneakers__title">Все кроссовки</div>
                    <form action="">
                        <img src='/img/search.svg' alt="" />
                        <input onChange={onChangeSearchValue} value={searchValue} type="text" placeholder="Поиск..."/>
                        {searchValue && <img onClick={onClearInput} className='clear-btn' src="../../../img/remove-btn.svg" alt="Clear" />}
                    </form>
                </div>
                <div className="catalog">
                    {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue))
                    .map((item) => (
                        <Card 
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onAdd={(obj) => onAddToCart(obj)}
                            searchValue={searchValue}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sneakers;

