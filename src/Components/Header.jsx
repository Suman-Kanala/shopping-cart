import { Link, NavLink } from "react-router-dom";
import cart from "../assets/cart.svg";
import Badge from "./Badge";

const Header = () => {
  return (
    <header className=" border-2 py-4 px-6">
      <section className="flex justify-between items-center">
        <div className="flex items-center flex-none">
          <Link to="/" className="font-extrabold text-4xl mx-6 ">
            <img className="w-12" src={cart} alt="" />
            Shopmate
          </Link>
        </div>
        <div className=" w-48 text-center mx-8 font-bold text-2xl flex gap-6">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>
        <div className="  w-48 text-center mx-8 font-bold text-2xl">
          <NavLink to="/cart" end>
            <Badge />
          </NavLink>
        </div>
      </section>
    </header>
  );
};

export default Header;
