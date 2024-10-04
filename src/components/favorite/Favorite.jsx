import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import Card from "../card/Card";

const Favorite = () => {
    

    return (
        <div className="favorites">
            <div className="container">
                <Link to='/' className="back-btn">
                    <img src="/public/img/back.svg" alt="Назад" />
                </Link>
                <h2>Мои закладки</h2>
                <div className="favorites__card">

                    {/* <Card title={title} price={price} imgUrl={imgUrl} /> */}
                </div>
            </div>
        </div>
    );
}

export default Favorite;