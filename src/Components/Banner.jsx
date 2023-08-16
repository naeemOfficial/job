import React from "react";
import heroMan from "../assets/heroman.png";
const Banner = () => {
  return (
    <div className="bg-[#f9f9ff]">
      <div className="container  mx-auto flex  flex-col lg:flex-row items-center pt-14 lg:pt-8">
        <div className="ml-[100px] w-full lg:w-1/2 space-y-6">
          <h1 className="text-[70px] font-bold lg:leading-[100px]">
            One Step <br className="hidden lg:block" /> Closer To Your{" "}
            <br className="hidden lg:block" />{" "}
            <span className="text-[#6078EA]">Dream Job</span>
          </h1>
          <p className="text-[#757575] text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-[#6078EA] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-5 py-2.5 rounded-lg text-white font-bold text-lg lg:text-xl">
            Get Started
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={heroMan} alt="A man" className="w-full object-contain " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
