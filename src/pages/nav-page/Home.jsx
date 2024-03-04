import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="absolute h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-[-11rem] md:object-top"
        alt=""
      />
      <div className="flex md:px-28 justify-center flex-col items-center md:items-end h-[89vh] ">
        <h2 className="text-[#58381C] font-bold text-xl md:text-4xl">
          LET US MAKE A TRIP TO
        </h2>
        <h1 className="text-2xl md:text-7xl font-semibold">MARS PLANET </h1>
        <Link
          to={"/mars"}
          className="border-2 border-white p-1 px-4 m-4 text-lg font-semibold flex items-center rounded transition-all delay-250 ease-in hover:bg-[#7e6249]"
        >
          Explore <FaArrowRight className="text-xl mx-2" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly md:px-28 bg-[#AEA085] bg-opacity-60">
        <div className="relative">
          <img src="bg/bg2.jpg" className="w-[90vw] md:w-[15vw] m-5" alt="" />
          <p className="absolute bg-black px-4 py-2 bg-opacity-60 rounded bottom-10 flex left-[40%] translate-x-[-30%] hover:bg-opacity-90 cursor-pointer">
            MARS ROVER
          </p>
        </div>
        <div className="tracking-normal w-[90vw] m-auto md:w-[40%] md:mt-14 text-lg text-center md:leading-6 text-[#58381C] font-semibold">
          <p>
            Welcome to Mars virtual trip! Mars, the fourth planet from the Sun,
            is a barren, red world with a thin atmosphere primarily composed of
            carbon dioxide. Its surface is marked by vast deserts, towering
            volcanoes, and deep canyons, including the largest volcano and
            canyon in the solar system, Olympus Mons and Valles Marineris,
            respectively.
          </p>
          <Link
            to={"/blog"}
            className="border-2 hover:border-white p-1 px-4 my-4 text-lg font-semibold flex items-center rounded transition-all delay-250 ease-in bg-[#7e6249] hover:text-[#7e6249] hover:bg-transparent w-fit mx-auto text-white border-slate-300"
          >
            Explore Top Posts <FaArrowRight className="text-xl mx-2" />
          </Link>
        </div>
        <div className="relative">
          <img src="bg/bg2.jpg" className="w-[90vw] md:w-[15vw] m-5" alt="" />
          <p className="absolute bg-black px-4 py-2 bg-opacity-60 rounded bottom-10 flex left-[40%] translate-x-[-30%] hover:bg-opacity-90 cursor-pointer">
            MARS ROVER
          </p>
        </div>
        <div className="relative">
          <img src="bg/bg2.jpg" className="w-[90vw] md:w-[15vw] m-5" alt="" />
          <p className="absolute bg-black px-4 py-2 bg-opacity-60 rounded bottom-10 flex left-[40%] translate-x-[-30%] hover:bg-opacity-90 cursor-pointer">
            MARS ROVER
          </p>
        </div>
        <div className="relative">
          <img src="bg/bg2.jpg" className="w-[90vw] md:w-[15vw] m-5" alt="" />
          <p className="absolute bg-black px-4 py-2 bg-opacity-60 rounded bottom-10 flex left-[40%] translate-x-[-30%] hover:bg-opacity-90 cursor-pointer">
            MARS ROVER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
