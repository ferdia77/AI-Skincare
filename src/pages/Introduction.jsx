import React, { useRef, useState, useEffect } from "react";
import { Router, useNavigate, } from "react-router-dom";


const Introduction = () => {
  const [phase, setPhase] = useState(1);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const locationInputRef = useRef(null);
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleNameKeyPress = (event) => {
    if (event.key === "Enter") {
      locationInputRef.current.focus();
      setPhase(2)
    }
  };

  const handleSubmit = () => {
    console.log(name, location); // Log the inputs
    passValueBackend(name, location).then(() => {
            navigate('/Testing')
        })
        .catch(err => {
            console.error("Error: ", err);
        })
  };

    const passValueBackend = async (name, location) => {
    try {
     
      const res = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, location }),
        });
        return res.json(); 

      //const result = await response.json();
      console.log("Backend response:", result);
    } catch (error) {
      console.error("Error sendng data to backend:", error);
    }

  }

  return (
    <>
      <div className="pl-12 pt-4">
        <a className="px-3 text-xs font-bold cursor-pointer ">SKINSTRIC</a>
        <a className="text-xs">[INTRO]</a>
      </div>
      <div className="pl-12 pt-6">To Start Analysis</div>
      <div className="h-screen flex flex-col items-center mt-40">
        <p className="text-[10px] text-gray-400 tracking-wider uppercase mb-1">
          CLICK TO TYPE
        </p>
        <div className="flex flex-col items-center justify-center bg-white text-center">
          {phase === 1 ? (
            <div className="relative flex flex-col items-center justify-center bg-white text-center">

              <input
                ref={locationInputRef}
                className="text-3xl font-semibold text-center bg-transparent border-b
              border-black focus:outline-none appearance-none w-[300px] leading-none pt-1"
                placeholder="Introduce Yourself"
                onKeyDown={handleNameKeyPress}
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              {name.length > 0 && <button onClick={handleNameKeyPress}>Proceed</button>}
            </div>
          ) : (
            <div className="relative flex flex-col items-center justify-center bg-white text-center">
              <input
                ref={locationInputRef}
                className="text-3xl font-semibold text-center bg-transparent border-b
              border-black focus:outline-none appearance-none w-[320px] leading-none pt-1"
                placeholder="What City are you from"
                value={location}
                onChange={handleLocationChange}
                type="text"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
              {name.length > 0 && <button onClick={handleSubmit}>Proceed</button>}
            </div>
          )}
        </div>
        
      </div>
      <div className="absolute bottom-10 w-full flex justify-between px-10 cursor-pointer">
        <div
          className="relative w-12 h-12 left-4 flex items-center justify-center border 
        border-black rotate-45 scale-[0.85]"
        >
          <span className="absolute rotate-[-45deg] text-xs font-semibold">
            BACK
          </span>
        </div>
        <a className="absolute inset-0" label="BACK" href="/"></a>
      </div>
    </>
  );
};

export default Introduction;
