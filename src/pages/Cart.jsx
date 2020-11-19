import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../components";
import PizzaInCart from "../components/Pizza/PizzaInCart";
import { clearCart } from "../redux/actions/cart";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalCount, totalPrice, pizzasInCart } = useSelector(
    ({ cart }) => cart
  );
  const clearTrash = () => {
    if (
      totalCount &&
      window.confirm("Вы действительно хотите очистить корзину?")
    ) {
      dispatch(clearCart());
    }
  };
  if (!totalCount) {
    return <EmptyCart />;
  }
  return (
    <div className="main__cart cart">
      <div className="cart__header">
        <h2 className="cart__title">Корзина</h2>
        <div className="cart__trash" onClick={clearTrash}>
          Очистить корзину
        </div>
      </div>
      <ul className="cart__list">
        {Object.values(pizzasInCart).map((obj) => {
          return (
            <PizzaInCart
              key={obj.oneKindItems[0].id}
              {...obj.oneKindItems[0]}
              total={obj.total}
              count={obj.count}
            />
          );
        })}
      </ul>
      <div className="cart__footer footer-cart">
        <div className="footer-cart__row">
          <div className="footer-cart__count">
            Всего пицц: <span>{totalCount}</span>
          </div>
          <div className="footer-cart__total">
            Сумма заказа: <span className="rub">{totalPrice}</span>
          </div>
        </div>
        <div className="footer-cart__row footer-cart__row-action">
          <Link to="/">
            <Button className="footer-cart__back">
              <span>Вернуться назад</span>
            </Button>
          </Link>
          <button className="footer-cart__pay btn">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
