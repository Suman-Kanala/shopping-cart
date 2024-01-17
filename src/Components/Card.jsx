import { useEffect, useState } from "react";
import { UseCart } from "../Context/CartContext";

const Card = ({ product }) => {
  const { img, price, name, id } = product;
  const { addToCart, cartList, remove } = UseCart();
  const [isInCart, setIsInCart] = useState(false);
  // console.log(cartList);

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg w-96 h-96" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
        </a>
        <div className="flex justify-between">
          <p>$ {price}</p>
          {isInCart ? (
            <button
              onClick={() => remove(product)}
              type="button"
              className="text-gray-900 bg-red-500 py-2 px-4 rounded-lg text-white"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              type="button"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 py-2 px-4 rounded-lg hover:stroke-lime-300"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
