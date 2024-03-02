import React, { useEffect, useState } from "react";
import { message } from "antd";
import Loader from "../../components/ui/Loader";
import useQuery from "../../hooks/useQuery";
import { apiMarsUrl } from "../../services/mars.api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Mars = () => {
  const [roverName, setRoverName] = useState("");
  const [cameraName, setCameraName] = useState("");
  const [roverDate, setRoverDate] = useState("");
  const [openSelect, setOpenSelect] = useState("0");

  const [filterUrl, setFilterUrl] = useState(
    `/mars-photos/api/v1/rovers/spirit/photos?sol=1&api_key=${
      import.meta.env.VITE_NASA_API
    }`
  );
  const { data, refetch, isLoading, isRefetching } = useQuery(() =>
    apiMarsUrl(filterUrl)
  );

  const handleFilter = async () => {
    if (roverDate === "" && cameraName === "" && roverName === "") {
      message.warning("Please select an option ");
    }
    if (openSelect === "1")
      setFilterUrl(
        `/mars-photos/api/v1/rovers/${roverName}/photos?sol=1&api_key=${
          import.meta.env.VITE_NASA_API
        }`
      );

    if (openSelect === "2")
      setFilterUrl(
        `/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${roverDate}&api_key=${
          import.meta.env.VITE_NASA_API
        }`
      );

    if (openSelect === "3")
      setFilterUrl(
        `/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cameraName}&api_key=${
          import.meta.env.VITE_NASA_API
        }`
      );

    refetch();
  };

  return (
    <div className="min-h-[90vh]">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <div className="md:p-10 md:pb-0 md:m-20 md:my-0  text-[#58381C]">
        <div className="flex flex-col md:flex-row md:mx-4 items-center">
          <select
            className="p-3 px-4 m-1 rounded w-[90vw] md:w-[unset]"
            name="openSelect"
            id="openSelect"
            value={openSelect}
            onChange={(e) => setOpenSelect(e.target.value)}
          >
            <option value="0">Select Category</option>
            <option value="1">Rover Name</option>
            <option value="3">Camera Name</option>
            <option value="2">Date of Capture</option>
          </select>
          {openSelect === "3" && (
            <select
              className="p-3 px-4 m-1 rounded w-[90vw] md:w-[unset]"
              name="camera"
              id="camera"
              value={cameraName}
              onChange={(e) => setCameraName(e.target.value)}
            >
              <option value="">Select Camera</option>
              <option value="fhaz">Front Hazard Avoidance Camera </option>
              <option value="rhaz">Rear Hazard Avoidance Camera </option>
              <option value="navcam">Navigation Camera </option>
            </select>
          )}
          {openSelect === "1" && (
            //   <FormControl >
            //   <InputLabel id="demo-simple-select-label">Age</InputLabel>
            //   <Select
            //     labelId="demo-simple-select-label"
            //     sx={{minWidth:"10rem",height:"3rem",bgcolor:"white"}}
            //     id="demo-simple-select"
            //     value={roverName}
            //     label="Age"
            //     onChange={(e) => setRoverName(e.target.value)}
            //   >
            //     <MenuItem value={10}>Ten</MenuItem>
            //     <MenuItem value={20}>Twenty</MenuItem>
            //     <MenuItem value={30}>Thirty</MenuItem>
            //   </Select>
            // </FormControl>
            <select
              className="p-3 px-4 m-1 rounded w-[90vw] md:w-[unset]"
              name="rover"
              id="rover"
              value={roverName}
              onChange={(e) => setRoverName(e.target.value)}
            >
              <option value="">Select Rover</option>
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </select>
          )}

          {openSelect === "2" && (
            <input
              className="p-2 px-4 mx-1 rounded w-[90vw] md:w-[unset]"
              type="date"
              name="date"
              // defaultValue={"2004-01-04"}
              min={"2004-01-04"}
              value={roverDate}
              onChange={(e) => setRoverDate(e.target.value)}
            />
          )}
          {openSelect !== "0" && (
            <button
              className="bg-[#58381C] w-[90vw] md:w-[unset] text-white hover:bg-[#d4a277] p-2 px-5  m-1 rounded"
              onClick={handleFilter}
            >
              Filter
            </button>
          )}
        </div>
      </div>
      <div className="p-2 md:p-5 flex flex-wrap md:mx-28">
        {!data?.data || data?.data?.photos?.length === 0 ? (
          isLoading || isRefetching || data?.data?.photos.length===0 ? (
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <img
                key={item}
                src={"/images/placeholder-image.png"}
                className="w-[90vw] md:w-56 m-2 bg-[#A29575] "
                loading="lazy"
                alt=""
              />
            ))
          ) : (
            <h2 className="text-2xl text-black">No Data Found</h2>
          )
        ) : (
          data?.data?.photos
            ?.slice(0, 10)
            ?.map((item) => (
              <img
                key={item?.img_src}
                src={item?.img_src}
                className="w-[90vw] md:w-56 m-2 "
                loading="lazy"
                alt=""
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Mars;
