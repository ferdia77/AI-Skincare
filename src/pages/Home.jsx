import React from "react";
import { Link } from "react-router-dom";
 

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden flex flex-col">
        <div className="flex items-center justify-between bg-white-custom h-[48px] px-8">
          <a href="/">
            <div className="flex justify-center items-center gap-2 text-center">
              <h1 className="font-roobert font-bold text-[14px]">SKINSTRIC</h1>
              <h2 className="font-roobert text-skinstric-gray-light text-[12px] text-bold">"[ INTRO ]"</h2>
            </div>
          </a>
          <button className="bg-black text-white font-roobert px-4 py-2 text-[10px] leading-4
          uppercase font-semibold tracking-tight cursor-not-allowed">ENTER CODE
          </button>
        </div>
        <main className="flex-1 relative overflow-hidden">
          <div className="hidden xl:flex items-center justify-between px-8 h-full">
            <div className="relative flex items-center justify-center transition-opacity duration-500 opacity-100">
              <div className="absolute w-[500px] h-[500px] border border-dotted border[#A0A4AB] rotate-45 -left-[400px]
             transition-opacity duration-500 opacity-100"></div>
              <a className="relative flex items-center justify-center cursor-not-allowed pointer-events-none opacity-50 hover:scale-105
              transition-transform w-[150px]" href="/">
                <div className="w-[40px] h-[40px] z-10 relative">
                  <img alt="Left button" className="w-full h-full object-contain"
                  src="https://skinstric-internship-psi.vercel.app/assets/skinstric-button-left.png" />
                </div>
                <span className="text-[14px] pl-4">DISCOVER A.I.</span>
              </a>
            </div> 
            <div className="relative z-10 text-center transition-transform duration-700 ease-in-out mx-8">
              <h1 className="font-[Roobert TRIAL] font-light text-[100px]
              leading-[100px] tracking-[-0.07em] max-w-[700px] px-4 text-center">
                <span >Sophisticated</span>
                <br />
                <span className="block transition-transform duration-700 ease-in-out px-8">
                  Skincare
                </span>
              </h1>
            </div>
            <div className="relative flex items-center justify-center transition-opacity duration-500 opacity-100">
              <div className="absolute w-[500px] h-[500px] border border-dotted border[#A0A4AB] rotate-45 -right-[400px]
              transition-opacity duration-500 opacity-100"></div>
              <a className="relative flex items-center justify-end hover:scale-105 transition-transform w-[150] flex items-end" href="/Introduction">
                <span className="text-[14px] pr-4">TAKE TEST</span>
                <button className="w-[40px] h-[40px] z-10 relative">
                  <img src="https://skinstric-internship-psi.vercel.app/assets/skinstric-button-right.png"  />
                </button>
              </a>
            </div>
          </div>
          <div className="xl:hidden flex flex-col items-center justify-center h-full relative z-10">
            <div className="absolute w-[400px] h-[400px] border border-dotted
             border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
             <div className="absolute w-[350px] h-[350px] border border-dotted
             border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
             <div className="absolute w-[300px] h-[300px] border border-dotted
             border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
             <div className="text-center z-10 px-6">
              <h1 className="font-[Roobert TRIAL] font-light text-[60px] leading-[48px] tracking-[-0.03em] text-center mb-8">
                  Sophisticated <br />
                  Skincare
                </h1>
                <a href="/testing">
                  <button className="bg-black text-white font-roobert px-6 py-3 text-[12px] leading-5 uppercase font-semibold tracking-tight">ENTER EXPERIENCE</button>
                </a>
             </div>  
          </div>
        </main>
        <footer className="pb-8">
          <div className="px-8 w-[400px] h-[72px] text-left"> 
            <p className="font-[Roobert TRIAL] font-normal text-[14px] leading-[24px] tracking-[0] uppercase">
            Skinstric developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
            </p>
          </div>
        </footer>
      </div>
      // test
    </>
  );
};

export default Home;
