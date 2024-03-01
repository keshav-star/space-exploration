import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  let url = window.location.href.split("/");
  url = url[url.length - 1];
  const [active, setActive] = useState(url);
  const [openNav, setOpenNav] = useState(false);
  const { logoutUser, authData } = useAuth();
  return (
    <nav className="p-3 mt-1 md:px-16 flex flex-col md:flex-row  items-center justify-between text-white ">
      <div className="flex items-center text-md md:text-2xl font-semibold">
        <img src="images/mars.png" className="w-10 md:w-12 me-2" alt="" />
        <p>SPACE EXPLORATION</p>
      </div>
      <ul className={`flex flex-col md:flex-row ${openNav?"mobile-nav":"mobile-nav-hide"}`}>
        <Link
          to={"/"}
          onClick={() => {
            setActive("home")
            setOpenNav(!openNav)
          }}
          className={`px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] ${
            active === "home" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={"/apod"}
          onClick={() => {
            setActive("apod")
            setOpenNav(!openNav)
          }}
          className={`px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] ${
            active === "apod" ? "active" : ""
          }`}
        >
          APOD
        </Link>
        <Link
          to={"/mars"}
          onClick={() => {
            setActive("mars")
            setOpenNav(!openNav)
          }}
          className={`px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] ${
            active === "mars" ? "active" : ""
          }`}
        >
          Mars
        </Link>
        <Link
          to={"/blog"}
          onClick={() => {
            setActive("blog")
            setOpenNav(!openNav)
          }}
          className={`px-3 p-1 text-lg rounded mx-2 hover:text-[#58381C] ${
            active === "blog" ? "active" : ""
          }`}
        >
          Blog
        </Link>
      </ul>
      {/* {!localStorage.getItem("login-token") ? (
        <div className="">
          <button onClick={} className="hover:bg-white hover:bg-opacity-30 p-1 px-3 rounded text-lg me-3">
            Login
          </button>
          <button className="text-[#1E2E38] bg-white hover:text-white hover:bg-white hover:bg-opacity-30 p-1 px-3 rounded text-lg">
            Sign Up
          </button>
        </div>
      ) : ( */}
      <div className="flex items-center mt-4 md:mt-0 w-full md:w-[unset] justify-between md:justify-normal">
        <div className="me-8 text-lg hidden md:block">
          Welcome ,<span className="text-[#ff9d4c] "> {authData.name}</span>
        </div>
        <button
          onClick={() => logoutUser()}
          className="text-[#1E2E38] bg-white hover:text-white hover:bg-white hover:bg-opacity-30 p-1 px-3 rounded md:text-lg"
        >
          Log out
        </button>
        <GiHamburgerMenu
          onClick={() => setOpenNav(!openNav)}
          className="block md:hidden text-3xl mx-1"
        />
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
