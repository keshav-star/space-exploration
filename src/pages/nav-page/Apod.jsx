import axios from "axios";
import React, { useState, useEffect } from "react";

const Apod = () => {
  const a = [
    {
      date: "2013-05-10",
      explanation:
        "Face-on spiral galaxy M77 lies a mere 47 million light-years away toward the aquatic constellation Cetus. At that estimated distance, the gorgeous island universe is about 100 thousand light-years across. Also known as NGC 1068, its compact and very bright core is well studied by astronomers exploring the mysteries of supermassive black holes in active Seyfert galaxies. M77 is also seen at x-ray, ultraviolet, infrared, and radio wavelengths. But this sharp visible light image based on Hubble data follows its winding spiral arms traced by obscuring dust clouds and red-tinted star forming regions close in to the galaxy's luminous core.",
      hdurl: "https://apod.nasa.gov/apod/image/1305/heic1305aM77_2948.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Messier 77",
      url: "https://apod.nasa.gov/apod/image/1305/heic1305aM77_900.jpg",
    },
  ];

  const [image, setImage] = useState(a);

  const fetchImage = async () => {
    const res = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1"
    );
    setImage(res.data);
  };

  // useEffect(() => {
  //   fetchImage();
  // }, []);
  return (
    <div>
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed md:absolute h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <div className="flex flex-col md:flex-row text-white md:px-28 justify-between my-4 md:mt-20 ">
        <div className="m-5 bg-[#58381C] bg-opacity-40 rounded p-4 md:p-10 ">
          <h2 className="text-xl md:text-4xl font-semibold text-center mb-8">{image[0]?.title}</h2>
          <p className="text-sm md:text-lg font-light line-clamp-6">
            {image[0]?.explanation}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-14">
            <div className="text-[#d4a277] mt-5 text-lg">Dated: <span className="text-white">{image[0]?.date}</span></div>
            <button
              onClick={() => fetchImage()}
              className=" rounded shadow-lg bg-[#e5dacf] text-[#58381C]  px-3 p-1 mt-4 me-10 hover:filter text-lg"
            >
              Next Post
            </button>
          </div>
        </div>
        <img src={image[0]?.url} loading="lazy" className="w-[90vw] md:w-[40vw] m-5 " />
      </div>
    </div>
  );
};

export default Apod;
