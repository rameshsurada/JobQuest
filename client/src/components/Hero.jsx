import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-purple-800 to-purple-950 mx-10 my-10 rounded-xl h-50">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4 text-4xl mt-10 font-semibold">
            {" "}
            <p className="text-white"> Find your </p>{" "}
            <p className="text-slate-200"> Dream Job </p>{" "}
            <p className="text-white"> with JobQuest</p>{" "}
          </div>{" "}
          <p className="text-slate-300 ">
            {" "}
            Explore thousands of job listings and connect with top companies
            hiring now.
          </p>
          <div className="flex items-center text-gray-600 bg-white rounded pl-4 max-w-xl mx-4">
            <div className="flex items-center">
              <img className="h-4" src={assets.search_icon} />
              <input
                type="text"
                placeholder="Search for jobs "
                className="outline-none p-2 rounded"
              />
            </div>
            <div className="flex items-center">
              <img className="h-4" src={assets.location_icon} />
              <input
                type="text"
                placeholder="Location"
                className="outline-none p-2 rounded"
              />
            </div>
            <button className="bg-blue-600 px-6 py-2 rounded text-white m-1">
              Search
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="mx-10 my-5  border rounded py-5 border-gray-300">
        <div className="flex gap-10 pl-5 lg:gap-16 flex-wrap items-start ">
          <p className="font-medium"> Trusted by</p>
          <img className=" h-5" src={assets.walmart_logo} />
          <img className=" h-5" src={assets.adobe_logo} />
          <img className=" h-5" src={assets.microsoft_logo} />
          <img className=" h-5" src={assets.accenture_logo} />
          <img className=" h-5" src={assets.amazon_logo} />
        </div>
      </div>
    </>
  );
};

export default Hero;
