import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";

const InitialState = {
  cartList: [],
  total: 0,
};

const cartContext = createContext(InitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, InitialState);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    updateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const remove = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.price));
    dispatch({
      type: "updateTotal",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    addToCart,
    cartList: state.cartList,
    remove,
    pro: state.cartList.length,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const UseCart = () => {
  const context = useContext(cartContext);
  return context;
};
