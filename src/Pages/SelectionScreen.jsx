import Link from "next/link";
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
      <div className='absolute'>
        Man
      </div>
    </>
  )
}

export default SelectionScreen
