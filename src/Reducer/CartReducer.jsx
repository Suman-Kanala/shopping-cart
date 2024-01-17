export const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };

    case "REMOVE":
      return { ...state, cartList: payload.products };
    case "updateTotal":
      return { ...state, total: payload.total };
  }
};
