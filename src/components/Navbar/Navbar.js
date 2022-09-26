import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between pr-15 gap-4 p-5 bg-black font-serif  ">
        <NavLink to={"/"}>
          <img
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
            <img
              className="w-13 h-10 "
              src="https://i.im.ge/2022/09/27/1N4nfP.kopra-removebg-preview.png"
              alt="ss"
            />
            {/* <span> {.length === 0 ? "" : .length}</span> */}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
