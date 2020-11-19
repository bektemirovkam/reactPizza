import React from "react";
import Button from "../Button";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { PropTypes } from "prop-types";

const typesOfDough = ["Тонкое", "Традиционное"];
const pizzaSizes = [26, 30, 40];

const PizzaBlock = ({
  imageUrl,
  name,
  prices,
  sizes,
  types,
  id,
  addPizzaToCart,
}) => {
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [activeTypeDough, setActiveDough] = React.useState(types[0]);
  const [price, setPrice] = React.useState(prices[0]);
  const count = useSelector(({ cart }) =>
    cart.pizzasInCart[id] ? cart.pizzasInCart[id].count : false
  );

  const handleClickAdd = (pizza) => {
    addPizzaToCart(pizza);
  };

  return (
    <div className="catalog__item">
      <div href="#" className="catalog__img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="catalog__name">{name}</div>
      <div className="catalog__form">
        <div className="catalog__choice">
          <ul className="catalog__row catalog__row-two">
            {typesOfDough.map((type, index) => {
              return (
                <li
                  className={classNames("catalog__text", {
                    active: index === activeTypeDough,
                    disabled: !types.includes(index),
                  })}
                  onClick={() => {
                    setActiveDough(index);
                  }}
                  key={`${type}_${index}`}
                >
                  {type}
                </li>
              );
            })}
          </ul>
          <ul className="catalog__row catalog__row-three">
            {pizzaSizes.map((size, index) => {
              return (
                <li
                  className={classNames("catalog__text", {
                    active: activeSize === size,
                    disabled: !sizes.includes(size),
                  })}
                  onClick={() => {
                    setActiveSize(size);
                    setPrice(prices[index]);
                  }}
                  key={`${size}_${index}`}
                >
                  {size}см
                </li>
              );
            })}
          </ul>
        </div>
        <div className="catalog__footer">
          <div className="catalog__price">
            <span className="rub">{price}</span>
          </div>
          <Button
            className="catalog__btn catalog-btn btn"
            onCkick={() => {
              handleClickAdd({
                imageUrl,
                name,
                price,
                activeSize,
                activeTypeDough,
                id,
              });
            }}
          >
            <span className="catalog-btn__text">Добавить</span>
            {count && <span className="catalog-btn__count">{count}</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

PizzaBlock.propType = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prices: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number.isRequired,
  addPizzaToCart: PropTypes.func,
};

PizzaBlock.defaultProps = {
  name: "Pizza",
  types: [],
};

export default PizzaBlock;
