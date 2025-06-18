import React from "react";

const Testing = () => {
  return (
    <>
      <div className="flex items-start flex-col w-full">
        <div className="flex pl-12 pt-8">
          <a className="px-3 text-xs font-bold ">SKINSTRIC</a>
          <a className="text-xs">[INTRO]</a>
        </div>
        <div className="pt-6 pl-12 font-semibold">TO START ANALYSIS</div>
      </div>
      <div className="flex items-center justify-center flex-col h-screen overflow-hidden">
        <div className="text-center pb-36">
          <h1 className="font-bold text-4xl">Thank you for submitting!</h1>
          <div className="font-semibold text-xl pt-2">
            Ready for the result? Process to the next Step
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-10 w-full flex justify-between px-10">
        <div className="relative w-12 h-12 left-4 flex items-center justify-center border border-black rotate-45 scale-[0.85]">
          <span className="absolute rotate-[-45deg] text-xs font-semibold">
            BACK
          </span>
        </div>
        <a className="absolute inset-0" aria-label="Back" href="/"></a>
      </div>
      <div className="absolute bottom-10 right-8 flex items-center gap-1"> 
        <div className="relative w-12 h-12 left-4 flex items-center justify-center border border-black rotate-45 scale-[0.85]">
          <span className="absolute rotate-[-45deg] text-xs font-semibold">
            Process
          </span>
        </div>
        <a className="absolute inset-0" aria-label="Process" href="/result"></a>
      </div>
      
    </>
  );
};

export default Testing;
