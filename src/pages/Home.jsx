import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { getPizzas } from "./../redux/actions/pizzas";
import PizzaBlock from "../components/Pizza/PizzaBlock";
import PizzaLoader from "../components/Pizza/PizzaLoader";

const availableSort = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "minPrice", order: "asc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const availableCategores = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Home = () => {
  const dispatch = useDispatch();

  const { category, sortBy, order } = useSelector(({ filters }) => filters);
  const { pizzas, isLoaded } = useSelector(({ pizzas }) => pizzas);

  React.useEffect(() => {
    dispatch(getPizzas(category, sortBy, order));
  }, [category, sortBy]);

  return (
    <>
      <div className="main__header">
        <Categories availableCategores={availableCategores} />
        <Sort availableSort={availableSort} />
      </div>
      <h2 className="main__title">
        {category !== null ? availableCategores[category] : "Все"} пиццы
      </h2>
      <div className="main__catalog catalog">
        {isLoaded
          ? pizzas.map((pizza) => {
              return <PizzaBlock {...pizza} key={pizza.id} />;
            })
          : Array(10)
              .fill(0)
              .map((i, index) => {
                return <PizzaLoader key={index} />;
              })}
      </div>
    </>
  );
};

export default Home;
