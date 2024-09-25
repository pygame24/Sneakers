// import { Route } from 'react-router-dom';
// import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import Header from './components/header/Header';
import Drawer from './components/drawer/Drawer';
import Sneakers from './components/sneakers/Sneakers';


function App() {

  // const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  // useEffect(() => {
  //   fetch('https://66b5c210b5ae2d11eb6490c0.mockapi.io/items')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, []);

  // const onAddToCart = (obj) => {
  //   setCartItems((prev) => [...prev, obj]);
  // };
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onOpenedCart={() => setCartOpened(true)} />
      
      <Sneakers setCartItem={setCartItems} />
    </div>
  )
}

export default App;
