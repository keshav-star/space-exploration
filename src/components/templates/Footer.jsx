import React from "react";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#58381C] p-2 px-6 md:px-20 flex justify-between items-center">
      <p>Copyright © {new Date().getFullYear()}</p>
      <div className="hidden md:block">
        <Link className="mx-2 cursor-pointer text-[#d4a277]" to={"/"}>
          Home
        </Link>
        <Link className="mx-2 cursor-pointer text-[#d4a277]" to={"/apod"}>
          Apod
        </Link>
        <Link className="mx-2 cursor-pointer text-[#d4a277]" to={"/mars"}>
          Mars
        </Link>
        <Link className="mx-2 cursor-pointer text-[#d4a277]" to={"/blog"}>
          Blog
        </Link>
      </div>
      <FaChevronUp onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#d4a277] p-1 text-2xl rounded-full cursor-pointer"/>
    </div>
  );
};

export default Footer;
