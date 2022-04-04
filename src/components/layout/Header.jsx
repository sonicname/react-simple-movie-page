import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-white bg-green-500 p-3 font-semibold rounded-md"
            : "p-3"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) =>
          isActive
            ? "text-white bg-green-500 p-3 font-semibold rounded-md"
            : "p-3"
        }
      >
        Movie
      </NavLink>
    </header>
  );
};

export default Header;
