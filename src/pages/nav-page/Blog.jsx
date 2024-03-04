import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import useQuery from "../../hooks/useQuery";
import { apiLimitBlogPosts } from "../../services/blog.api";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const { data, isLoading, refetch } = useQuery(() =>
    apiLimitBlogPosts(currentIndex * 8)
  );
  const [filteredData, setFilteredData] = useState(null);

  const paginate = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > data?.data?.total) pageNumber = data?.data?.total;

    setCurrentIndex(pageNumber);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const tempData = data?.data?.posts?.filter((item) => {
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
    if (data) {
      setFilteredData(data.data.posts);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [currentIndex]);

  return (
    <div className="min-h-[90vh] px-5 md:px-10 lg:px-20 py-5">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h2 className="text-3xl font-semibold">Top Posts</h2>
          <p className="text-xl  mt-3 md:m-0">
            Some of the lastest posts on space exploration
          </p>
        </div>
        <div className=" mt-3 md:m-0 px-3 text-[var(--theme-color)] bg-white flex items-center">
          <CiSearch className="text-xl" />
          <input
            type="search"
            placeholder="Search ..."
            className="p-1  outline-none rounded "
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-10 min-h-[50vh]">
        {isLoading ? (
          [1,2,3,4,5,6,7,8].map((subitem) => {
            return (
              <div
                key={subitem}
                className={`border-2 bg-opacity-60 hover:bg-opacity-100 transition-all duration-400 p-4 py-4 my-2 md:w-[20vw] rounded bg-[#7a6a4a] hover:scale-105 cursor-pointer select-none`}
              >
                <h2
                  target="_blank"
                  className="animate-pulse text-xl line-clamp-1 text-[#A29575] bg-[#A29575] font-semibold "
                >
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="animate-pulse line-clamp-6 mt-3 text-sm bg-[#A29575] text-[#A29575]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia omnis incidunt atque quidem perspiciatis dicta blanditiis! Quaerat vitae sequi dicta quas, asperiores rerum fugit, esse ullam temporibus molestias nam commodi.</p>
              </div>
            );
          })
        ) : filteredData?.length === 0 ? (
          <img src="AXk.svg"  className="w-[90vw] md:w-[20vw]"
          loading="lazy"
          alt="" />
        ) : (
          filteredData &&
          filteredData?.slice(-8).map((subitem) => {
            return (
              <div
                key={subitem.id}
                className={`border-2 bg-opacity-60 hover:bg-opacity-100 transition-all duration-400 p-4 py-4 my-2 md:w-[27vw] lg:w-[20vw] rounded bg-[#7a6a4a] hover:scale-105 cursor-pointer select-none`}
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
        <button
          className={`border-2 border-white px-2 p-1  rounded mx-1 me-3 bg-[#7a6a4a] bg-opacity-6 ${
            currentIndex === 1
              ? "cursor-not-allowed hover:bg-opacity-100"
              : "hover:bg-opacity-65"
          }`}
          onClick={() => paginate(currentIndex - 1)}
          disabled={currentIndex === 1}
        >
          Prev 
        </button>
        {Array.from({ length: (data?.data?.total)/10 })
          .slice(
            currentIndex > 2 ? currentIndex - 2 : 1,
            currentIndex >= (data?.data?.total/10) + 2 ? (data?.data?.total)/10 : currentIndex + 2
          )
          .map((_, index) => (
            <p
            key={index}
              className={`border-2 cursor-pointer hover:bg-opacity-85 border-white px-1 rounded mx-1 bg-[#7a6a4a] bg-opacity-65 ${
                currentIndex === index + currentIndex ? "bg-red-400" : ""
              } `}
              onClick={() => {
                paginate(currentIndex + index);
              }}
            >
              {currentIndex + index}
            </p>
          ))}
        ..
        <button
          className={`ms-3 border-2 border-white px-2 p-1 rounded mx-1 bg-[#7a6a4a] bg-opacity-6 ${
            currentIndex === (data?.data?.total)/10
              ? "cursor-not-allowed hover:bg-opacity-100"
              : " hover:bg-opacity-65"
          }`}
          onClick={() => paginate(currentIndex + 1)}
          disabled={currentIndex === (data?.data?.total)/10}
        >
          Next 
        </button>
      </div>
    </div>
  );
};

export default Blog;
