import axios from "axios";

export const getItems = (category, sortBy, order) => {
  return axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ``
      }&_sort=${sortBy}&_order=${order}`
    )
    .then((resp) => resp.data);
};
