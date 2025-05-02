import React from "react";

function textInput() {
    
}

const TakeTheTest = () => {
  return (
    <div>
      <div className="pl-12 pt-4">
        <a className="px-3 text-xs font-bold cursor-pointer ">SKINSTRIC</a>
        <a className="text-xs">[INTRO]</a>
      </div>
      <div className="pl-12 pt-6">To Start Analysis</div>
      <div className="relative flex flex-col items-center justify-center mb-40">
        <p className="text-[10px] text-gray-400 tracking-wider uppercase mb-1">CLICK TO TYPE</p>
        <input className="text-3xl font-semibold text-center bg-transparent border-b
         border-black focus:outline-none appearance-none w-[300px] leading-none pt-1"
         placeholder="Introduce Yourself" type="text" />
      </div>
      <div className="absolute bottom-10 w-full flex justify-between px-10 cursor-pointer">
        <div className="relative w-12 h-12 left-4 flex items-center justify-center border 
        border-black rotate-45 scale-[0.85]">
            <span className="absolute rotate-[-45deg] text-xs font-semibold">BACK</span>
        </div>
        <a className="absolute inset-0" label="BACK" href="/"></a>
      </div>
    </div>
  );
};

export default TakeTheTest;
