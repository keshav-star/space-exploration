import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import Loader from "../../components/ui/Loader";

const Mars = () => {
  const [roverName, setRoverName] = useState("");
  const [cameraName, setCameraName] = useState("");
  const [roverDate, setRoverDate] = useState("");
  const [openSelect, setOpenSelect] = useState("0");
  const [data, setData] = useState([]);

  const handleFilter = async () => {
    if (roverDate === "" && cameraName === "" && roverName === "") {
      message.warning("Please select an option ");
    }
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/`;
    let res;

    if (openSelect === "1") url += `${roverName}/photos?sol=1&api_key=DEMO_KEY`;

    if (openSelect === "2")
      url += `curiosity/photos?earth_date=${roverDate}&api_key=DEMO_KEY`;

    if (openSelect === "3")
      url += `curiosity/photos?sol=1000&camera=${cameraName}&api_key=DEMO_KEY`;

    res = await axios.get(url);
    setData(res.data.photos);
  };
  const fetchImages = async () => {
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY`;

    let res = await axios.get(url);
    setData(res.data.photos);
  };

  useEffect(() => {
    if (openSelect === "0") fetchImages();
  }, []);
  return (
    <div className="min-h-[90vh]">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <div className="p-10 m-20 my-5  text-[#58381C]">
        <div className="flex m-4 items-center">
          <select
            className="p-3 px-4 m-1 rounded"
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
              className="p-3 px-4 m-1 rounded"
              name="camera"
              id="camera"
              value={cameraName}
              onChange={(e) => setCameraName(e.target.value)}
            >
              <option value="">Select Camera</option>
              <option value="fhaz">Front Hazard Avoidance Camera </option>
              <option value="rhaz">Rear Hazard Avoidance Camera </option>
              <option value="navcam">Navigation Camera </option>
              {/* <option value="mast">Mast Camera</option> */}
              {/* <option value="chemcam">Chemistry and Camera Complex </option> */}
              {/* <option value="mahli">Mars Hand Lens Imager </option> */}
              {/* <option value="mardi">Mars Descent Imager </option> */}
              {/* <option value="pancam">Panoramic Camera </option> */}
              {/* <option value="minites">
              Miniature Thermal Emission Spectrometer (Mini-TES){" "}
            </option> */}
            </select>
          )}
          {openSelect === "1" && (
            <select
              className="p-3 px-4 m-1 rounded"
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
              className="p-2 px-4 mx-1 rounded"
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
              className="bg-[#58381C] text-white hover:bg-[#d4a277] p-2 px-5  m-1 rounded"
              onClick={handleFilter}
            >
              Filter
            </button>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-wrap mx-28">
        {!data || data.length===0 ? (
          <h2 className="text-2xl text-black">No Data Found</h2>
        ) : (
          data
            .slice(0, 10)
            .map((item) => (
              <img
                key={item.img_src}
                src={item.img_src}
                className="w-56 m-2"
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
