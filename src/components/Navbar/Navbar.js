import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const NavBar = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  const itemsInCart = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
  return (
    <div className="text-white">
      <div className="flex justify-between pr-15 gap-4 p-5 bg-black font-serif  ">
        <NavLink to={"/"}>
          <img
            alt="nav-img"
            className="w-6/12"
            src="https://istyle.rs/media/logo/stores/9/iSTYLE-logo-white-red.svg"
          />
        </NavLink>
        <div className="flex justify-end gap-6 font-bold pr-4 text-2xl">
          <NavLink to={"/"}>
            <h2 className="pt-2">Products</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2 className="pt-2"> About us</h2>
          </NavLink>
          <NavLink to={"/cart"}>
            <div
              type="button"
              class="inline-flex -top-2 relative items-center p-3 text-sm font-medium text-center text-white rounded-lge-"
            >
              <svg
                className="h-8 w-8 text-white mt-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              {cartItems.length > 0 && (
                <div class="inline-flex absolute -top-1 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                  <span className="mx-auto -mt-1çç">{itemsInCart}</span>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
