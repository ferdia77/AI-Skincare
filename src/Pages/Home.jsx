import React from "react";
import { Link } from "react-router-dom";
import TakeTheTest from "./TakeTheTest";
 

const Home = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between ">
        <div className="pl-12">
          <a className="px-3 text-xs font-bold ">SKINSTRIC</a>
          <a className="text-xs">[INTRO]</a>
        </div>
        <div>
          <button
            className="bg-black text-white text-xs cursor-pointer mr-8 my-8 p-2 border
            rounded-md mb-14 mr-12"
          >
            Enter Code
          </button>
        </div>
      </div>
      <div
        className="pt-14 content-center text-7xl flex (display: flex), justify-between (justify-content: space-between)
        items-center (align-items: center)"
      >
        <div className="pl-24 text-base font-semibold cursor-pointer">Discover A.I.</div>
        <div className="text-7xl font-bold">
          Sophisticated <br /> skincare
        </div>
        <Link to={<TakeTheTest/>} className="pr-24 text-base font-semibold cursor-pointer">Take the Test</Link>
      </div>
      <div className="pt-40 pl-24 font-medium">
        Skinstric developed an A.I. that creates a <br/>
        highly-personalized routine tailored to <br/>
        what your skin needs.
      </div>
    </>
  );
};

export default Home;
