import React from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { Button } from "../components";

export const Header = () => {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart);
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <h1 className="header__title">REACT PIZZA</h1>
        <span className="header__subtitle">
          самая вкусная пицца во вселенной
        </span>
      </Link>
      <Route path="/" exact>
        <Link to="/cart">
          <Button className="header__order order-head">
            <span className="order-head__total rub">{totalPrice}</span>
            <span className="order-head__line"></span>
            <span className="order-head__count">{totalCount}</span>
          </Button>
        </Link>
      </Route>
    </header>
  );
};

export default Header;
