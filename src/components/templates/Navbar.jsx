import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  let url = window.location.href.split("/");
  url = url[url.length - 1];
  const [active, setActive] = useState(url);
  const [openNav, setOpenNav] = useState(false);
  const { logoutUser, authData } = useAuth();
  return (
    <nav className="p-3 mt-1 md:px-8 lg:px-16 flex flex-col md:flex-row  items-center justify-between text-white ">
      <NavLink className="flex items-center text-md md:text-lg lg:text-2xl font-semibold" to={'/'}>
        <img src="images/mars.png" className="w-10 md:w-12 me-2 animate-spin-slow" alt="" />
        <p className="text-white">SPACE EXPLORATION</p>
      </NavLink>
      <ul
        className={`flex flex-col md:flex-row ${
          openNav ? "mobile-nav" : "mobile-nav-hide"
        }`}
      >
        <NavLink
          to={"/"}
          onClick={() => {
            setActive("home");
            setOpenNav(!openNav);
          }}
          className={({ isActive }) =>
            isActive
              ? "px-3 p-1 text-lg rounded mx-2 font-semibold text-[#58381C]"
              : "px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] "
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/apod"}
          onClick={() => {
            setActive("apod");
            setOpenNav(!openNav);
          }}
          className={({ isActive }) =>
          isActive
            ? "px-3 p-1 text-lg rounded mx-2 font-semibold text-[#58381C]"
            : "px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] "
        }
        >
          APOD
        </NavLink>
        <NavLink
          to={"/mars"}
          onClick={() => {
            setActive("mars");
            setOpenNav(!openNav);
          }}
          className={({ isActive }) =>
          isActive
            ? "px-3 p-1 text-lg rounded mx-2 font-semibold text-[#58381C]"
            : "px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] "
        }
        >
          Mars
        </NavLink>
        <NavLink
          to={"/blog"}
          onClick={() => {
            setActive("blog");
            setOpenNav(!openNav);
          }}
          className={({ isActive }) =>
          isActive
            ? "px-3 p-1 text-lg rounded mx-2 font-semibold text-[#58381C]"
            : "px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] "
        }
        >
          Blog
        </NavLink>
      </ul>
      
      <div className="flex items-center mt-4 md:mt-0 w-full md:w-[unset] justify-between md:justify-normal">
        <div className="me-8 text-lg hidden welcome-name">
          Welcome ,<span className="text-[#ff9d4c] "> {authData.name || "Martian"}</span>
        </div>
        {/* <button
          onClick={() => logoutUser()}
          className="animated-button-light p-1 px-3 rounded md:text-lg"
        >
          Log out
        </button> */}
        <GiHamburgerMenu
          onClick={() => setOpenNav(!openNav)}
          className="block md:hidden text-3xl mx-1 cursor-pointer hover:text-[#58381C]"
        />
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
