import axios from "axios";
import React, { useState, useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import Loader from "../../components/ui/Loader";
import { apiApod } from "../../services/mars.api";

const Apod = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery(() =>
    apiApod(
      `https://api.nasa.gov/planetary/apod?api_key=${
        import.meta.env.VITE_NASA_API
      }&count=1`
    )
  );

  const [image, setImage] = useState([]);

  useEffect(() => {
    if (data) {
      setImage(data?.data);
    }
  }, [data]);
  return (
    <div className="min-h-[100vh]">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      {isLoading || isRefetching || data?.length === 0 ? (
        //Loading template for apod
        <div className="flex flex-col md:flex-row text-white md:px-28 justify-between my-4 md:mt-20 md:w-[100vw]">
          <div className="m-5 bg-[#58381C] bg-opacity-40 rounded p-4 md:p-10 ">
            <h2 className="text-xl md:text-4xl font-semibold text-center mb-8 bg-[#A29575] rounded text-[#A29575]">
              Lorem, ipsum.
            </h2>
            <p className="text-sm md:text-lg font-light line-clamp-6 bg-[#A29575] rounded text-[#A29575]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              suscipit, molestiae consequuntur repudiandae laudantium voluptates
              id doloribus iste similique? Eos quibusdam accusantium accusamus
              quam voluptates. Quae eum necessitatibus unde itaque maiores
              quidem praesentium distinctio fugiat doloribus, corporis nam
              ratione eos!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-14">
              <div className="mt-5 text-lg bg-[#A29575] rounded text-[#A29575]">
                Dated: <span className="">1291-13-21</span>
              </div>
              <button
                onClick={() => refetch()}
                className="bg-[#A29575] text-[#A29575] rounded shadow-lg  px-3 p-1 mt-4 me-10 hover:filter text-lg"
              >
                Next Post
              </button>
            </div>
          </div>
          <img
            src={"images/placeholder-image.png"}
            loading="lazy"
            className="w-[90vw] md:w-[40vw] md:h-[30vw] m-5 bg-[#A29575] "
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row text-white md:px-28 justify-between my-4 md:mt-20">
          <div className="m-5 bg-[#58381C] bg-opacity-40 rounded p-4 md:p-10 md:w-[40rem]">
            <h2 className="text-xl md:text-4xl font-semibold text-center mb-8">
              {image[0]?.title}
            </h2>
            <p className="text-sm md:text-lg font-light line-clamp-6">
              {image[0]?.explanation}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-14">
              <div className="text-[#d4a277] mt-5 text-lg">
                Dated: <span className="text-white">{image[0]?.date}</span>
              </div>
              <button
                onClick={() => refetch()}
                className=" rounded shadow-lg bg-[#e5dacf] text-[#58381C]  px-3 p-1 mt-4 me-10 hover:filter text-lg"
              >
                Next Post
              </button>
            </div>
          </div>
          <img
            src={image[0]?.url}
            loading="lazy"
            className="w-[90vw] md:w-[40vw] md:h-[30vw] m-5 "
          />
        </div>
      )}
    </div>
  );
};

export default Apod;
