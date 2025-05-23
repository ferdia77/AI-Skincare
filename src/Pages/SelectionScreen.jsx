
import React, { useRef, useCallback } from "react";
//import Header from "@/components/header";
import { gsap } from "gsap";

const SelectionScreen = () => {
  const diamondRefs = useRef(Array(4).fill(null));

  const handleHover = useCallback((index) => {
    gsap.to(diamondsRefs.current[index], {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      stagger: 0.2,

    });
  }, []);

  const handleSelection = useCallback((selectionType) => {
    //Handle selection logic here
    console.log("Selected:", selectionType);
    // if need to navigate or update state, do it here
  }, []);

  return (
    <>
      <div className='absolute top-10 left-8 tex-left mt-5'>
        <h1 className="text-normal font-bold">
          A.I. ANALYSIS
        </h1>
        <p className="text-xs mt-1 text-muted-foreground">
          A.I. has estimated the following: <br />
          Fix estimated information if needed
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-[1px]">
        {[

        ]}
      </div>
    </>
  )
}

export default SelectionScreen
