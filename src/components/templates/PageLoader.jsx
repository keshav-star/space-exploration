import React from "react";

const PageLoader = () => {

  return (
    <main className="w-full h-full flex-1 flex justify-center items-center">
      <div className="loader flex items-center justify-center">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="absolute h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-[-11rem] md:object-top"
        alt=""
      />
      </div>
    </main>
  );
};

export default PageLoader;
