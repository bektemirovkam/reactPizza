import { getItems } from "./../../api/api";

const setPizzas = (pizzas) => {
  return {
    type: "SET_PIZZAS",
    payload: pizzas,
  };
};

const setIsLoaded = (val) => {
  return {
    type: "SET_LOADED",
    payload: val
  };
};

export const getPizzas = (category, sortBy, order) => (dispatch) => {
  dispatch(setIsLoaded(false));
  getItems(category, sortBy, order).then((data) => {
    dispatch(setPizzas(data));
    dispatch(setIsLoaded(true));
  });
};
