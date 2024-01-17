import UseTitle from "../Hooks/UseTitle";
import data from "../Data/data";
import { UseCart } from "../Context/CartContext";

const Cart = ({ title }) => {
  UseTitle(title);
  const { pro, remove, cartList, total } = UseCart();

  return (
    <section className="my-4">
      <center className="m-2 font-extrabold text-3xl">
        <h3>
          Cart Items : {pro} / $ {total}
        </h3>
      </center>
      <div>
        {cartList.map((e) => (
          <div
            key={e.id}
            className="flex justify-between items-center border-2 text-lg font-bold px-4 py-4 my-2"
          >
            <img src={e.img} className="w-56 h-56" />
            <p>{e.name}</p>
            <p>${e.price}</p>
            <button
              onClick={() => remove(e)}
              className="bg-red-500 px-6 py-4 rounded-lg text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
