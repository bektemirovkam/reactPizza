import React from "react";
import { useDispatch } from "react-redux";
import Button from "./../Button";
import { deleteOneKind, minusItem, plusItem } from "./../../redux/actions/cart";
import { PropTypes } from "prop-types";

const typesOfDough = ["Тонкое", "Традиционное"];

const PizzaInCart = ({
  imageUrl,
  name,
  activeTypeDough,
  activeSize,
  total,
  count,
  id,
}) => {
  const dispatch = useDispatch();
  const incrPizzas = () => {
    dispatch(plusItem(id));
  };
  const decrPizzas = () => {
    dispatch(minusItem(id));
  };
  const delOneKind = () => {
    if (window.confirm("Вы действительно хотите удалить эти пиццы?"))
      dispatch(deleteOneKind(id));
  };
  return (
    <li>
      <div className="cart__product product-cart">
        <div className="product-cart__left">
          <div className="product-cart__img">
            <img src={imageUrl} alt="pizza" />
          </div>
          <div className="product-cart__info">
            <div className="product-cart__name">{name}</div>
            <div className="product-cart__descr">
              {typesOfDough[activeTypeDough]} тесто, {activeSize} см.
            </div>
          </div>
        </div>
        <div className="product-cart__right">
          <div className="product-cart__quantity quantity-cart">
            <Button
              className="quantity-cart__btn quantity-cart__btn-down"
              onCkick={decrPizzas}
            ></Button>
            <span className="quantity-cart__count">{count}</span>
            <Button
              className="quantity-cart__btn quantity-cart__btn-up"
              onCkick={incrPizzas}
            ></Button>
          </div>
          <div className="product-cart__total rub">{total}</div>
          <Button
            className="product-cart__delete"
            onCkick={delOneKind}
          ></Button>
        </div>
      </div>
    </li>
  );
};

PizzaInCart.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  activeTypeDough: PropTypes.string.isRequired,
  activeSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default PizzaInCart;
