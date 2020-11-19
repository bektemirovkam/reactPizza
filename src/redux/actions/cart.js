export const setPizzaToCart = (pizza) => ({
  type: "SET_PIZZA_TO_CART",
  payload: pizza,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const plusItem = (id) => ({
  type: "ADD_ITEM",
  payload: id,
});

export const minusItem = (id) => ({
  type: "REMOVE_ITEM",
  payload: id,
});

export const deleteOneKind = (id) => ({
  type: "DELETE_ONE_KIND",
  payload: id,
});
