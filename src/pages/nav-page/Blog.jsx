import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/ui/Loader";
import { CiSearch } from "react-icons/ci";

const Blog = () => {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState(data.posts);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    let url = `https://dummyjson.com/posts?limit=${currentIndex * 8}`;
    let res = await axios.get(url);
    setData(res.data);
    setFilteredData(res.data.posts);
    setLoading(false);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const tempData = data?.posts?.filter((item) => {
      const lowercaseKeywords = value.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowercaseKeywords) ||
        item.body.toLowerCase().includes(lowercaseKeywords) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowercaseKeywords))
      );
    });
    setFilteredData(tempData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-[90vh] px-20 py-5">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-3xl font-semibold">Top Posts</h2>
          <p className="text-xl">
            Some of the lastest posts on space exploration
          </p>
        </div>
        <div className=" px-3 text-[var(--theme-color)] bg-white flex items-center">
          <CiSearch className="text-xl" />
          <input
            type="search"
            placeholder="Search ..."
            className="p-1  outline-none rounded"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-10 min-h-[50vh]">
        {loading ? (
          <Loader />
        ) : filteredData?.length === 0 ? (
          <div className="text-xl">No Match Found</div>
        ) : (
          filteredData?.slice(-8).map((subitem) => {
            return (
              <div
                key={subitem.id}
                className={`border-2 bg-opacity-60 hover:bg-opacity-100 transition-all duration-700 p-4 py-4 my-2 md:w-[20vw] rounded bg-[#7a6a4a]`}
              >
                <h2
                  title={subitem.title}
                  target="_blank"
                  className="text-xl line-clamp-1 text-[#3E2724] font-semibold "
                >
                  {subitem.title}
                </h2>
                <p className="line-clamp-6 mt-3 text-sm">{subitem.body}</p>
              </div>
            );
          })
        )}
      </div>
      <div className="flex items-center justify-end mt-4">
        <button className="border-2 border-white px-2 p-1 hover:bg-opacity-65 rounded mx-1 me-3 bg-[#7a6a4a] bg-opacity-6">Prev Page</button>
        {Array.from({ length: data.total })
          .slice(0, 3)
          .map((_, index) => (
            <p
              className="border-2 cursor-pointer hover:bg-opacity-85 border-white px-1 rounded mx-1 bg-[#7a6a4a] bg-opacity-65"
              onClick={() => {
                fetchData();
                setCurrentIndex(index + 1);
              }}
            >
              {index + 1}
            </p>
          ))}
        ..
        <button className="ms-3 border-2 border-white px-2 p-1 hover:bg-opacity-65 rounded mx-1 bg-[#7a6a4a] bg-opacity-6">Next Page</button>
      </div>
    </div>
  );
};

export default Blog;
