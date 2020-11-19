import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";

const Categories = React.memo(({ availableCategores }) => {
  const currentCategory = useSelector(({ filters }) => filters.category);
  const dispatch = useDispatch();
  const choiceCategory = (value) => {
    dispatch(setCategory(value));
  };
  return (
    <ul className="categories">
      <li
        className={classNames("categories__link", {
          active: currentCategory === null,
        })}
        onClick={() => {
          choiceCategory(null);
        }}
      >
        Все
      </li>
      {availableCategores.map((category, index) => (
        <li
          className={classNames("categories__link", {
            active: currentCategory === index,
          })}
          onClick={(e) => {
            choiceCategory(index);
          }}
          key={`${category}_${index}`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
});

export default Categories;
