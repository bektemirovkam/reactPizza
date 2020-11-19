const initialState = {
  pizzasInCart: {},
  totalCount: 0,
  totalPrice: 0,
};

const getSum = (arr, key) => {
  return arr.reduce((sum, item) => sum + item[key], 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_TO_CART": {
      const newOneKindItems = state.pizzasInCart[action.payload.id]
        ? [
            ...state.pizzasInCart[action.payload.id].oneKindItems,
            action.payload,
          ]
        : [action.payload];
      const newPizzasInCart = {
        ...state.pizzasInCart,
        [action.payload.id]: {
          oneKindItems: newOneKindItems,
          total: getSum(newOneKindItems, "price"),
          count: newOneKindItems.length,
        },
      };
      return {
        ...state,
        pizzasInCart: newPizzasInCart,
        totalCount: getSum(Object.values(newPizzasInCart), "count"),
        totalPrice: getSum(Object.values(newPizzasInCart), "total"),
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        pizzasInCart: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }
    case "ADD_ITEM": {
      const newOneKindItems = [
        ...state.pizzasInCart[action.payload].oneKindItems,
        state.pizzasInCart[action.payload].oneKindItems[0],
      ];
      const newPizzasInCart = {
        ...state.pizzasInCart,
        [action.payload]: {
          oneKindItems: newOneKindItems,
          total: getSum(newOneKindItems, "price"),
          count: newOneKindItems.length,
        },
      };
      console.log(Object.values(newPizzasInCart));
      return {
        ...state,
        pizzasInCart: newPizzasInCart,
        totalCount: getSum(Object.values(newPizzasInCart), "count"),
        totalPrice: getSum(Object.values(newPizzasInCart), "total"),
      };
    }
    case "REMOVE_ITEM": {
      const newOneKindItems = [
        ...state.pizzasInCart[action.payload].oneKindItems.slice(1),
      ];
      let newPizzasInCart;
      if (newOneKindItems.length) {
        newPizzasInCart = {
          ...state.pizzasInCart,
          [action.payload]: {
            oneKindItems: newOneKindItems,
            total: getSum(newOneKindItems, "price"),
            count: newOneKindItems.length,
          },
        };
      } else {
        newPizzasInCart = {
          ...state.pizzasInCart,
        };
        delete newPizzasInCart[action.payload];
      }
      return {
        ...state,
        pizzasInCart: newPizzasInCart,
        totalCount: getSum(Object.values(newPizzasInCart), "count"),
        totalPrice: getSum(Object.values(newPizzasInCart), "total"),
      };
    }
    case "DELETE_ONE_KIND": {
      const newPizzasInCart = {
        ...state.pizzasInCart,
      };
      delete newPizzasInCart[action.payload];
      return {
        ...state,
        pizzasInCart: newPizzasInCart,
        totalCount: getSum(Object.values(newPizzasInCart), "count"),
        totalPrice: getSum(Object.values(newPizzasInCart), "total"),
      };
    }
    default:
      return state;
  }
};

export default cart;
