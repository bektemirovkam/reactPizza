import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../assets/img/empty-cart.svg";
import Button from "./../components/Button";

const EmptyCart = () => {
  return (
    <div className="main__empty-cart empty-cart">
      <h2 className="empty-cart__title">Корзина пуста</h2>
      <div className="empty-cart__subtitle">
        Вероятнеe всего, вы не заказывали ещё пиццу.
        <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
      </div>
      <Link to="/" className="empty-cart__img">
        <img src={emptyCart} alt="" />
      </Link>
      <Link to="/">
        <Button className="empty-cart__btn btn">Вернуться назад</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
