"use client"
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Diamond from "./Diamond";
import { Camera, Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const continuousRotation = (target, duration) => {
  gsap.to(target, {
    rotation: "+=360",
    duration: duration,
    repeat: -1,
    ease: "linear",
    transformOrigin: "50% 50%",
    onUpdate: () => {
      const currentRotation = gsap.getProperty(target, "rotation");
      gsap.set(target, { rotation: currentRotation % 360 });
    },
  });
};

const Result = () => {
  const Router = useRouter();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiProgress, setAPIProgress] = useState(0);
  const [apiMessage, setAPIMessage] = useState("");

  const outerDiamondRefCamera = useRef(null);
  const midDiamondRefCamera = useRef(null);
  const innerDiamondRefCamera = useRef(null);
  const outerDiamondRefGallery = useRef(null);
  const midDiamondRefGallery = useRef(null);
  const innerDiamondRefGallery = useRef(null);

  useEffect(() => {
    const storedImage = localStoragr.getItem("captureImage");
    if (storedImage) {
      setPreviewImage(storedImage);
    } else {
      setPreviewImage(null);
    }
    if (outerDiamondRefCamera.current) {
      continuousRotation(midDiamondRefCamera.current, 5);
    }
    if (midDiamondRefCamera.current) {
      continuousRotation(midDiamondRefCamera.current, 5.25);
    }
    if (outerDiamondRefCamera.current) {
      continuousRotation(innerDiamondRefCamera.current, 5.5)
    }
    if (outerDiamondRefGallery.current) {
      continuousRotation(midDiamondRefGallery.current, 5);
    }
    if (midDiamondRefGallery.current) {
      continuousRotation(midDiamondRefGallery.current, 5.25);
    }
    if (outerDiamondRefCamera.current) {
      continuousRotation(innerDiamondRefGallery.current, 5.5)
    }

    return () => {
      setPreviewImage(null);
    };
  }, [])

  return (
    <>
      <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3">
        <div className="flex flex-row pt-1 scale-75 pl-12 pt-8">
          <a
            className="inline-flex items-center justify-center gap-2
           whitespace-nowrap rounded-md transition-colours focus-visible:outline-none
           focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
           disabled:opacity-50 [&_svg]:size-4[&_svg]:shrink-0 h-9 px-4 py-2 
           font-bold text-xs mr-2 line-clamp-4"
            href="/"
          >
            SKINSTRIC
          </a>
          <p className="text-muted-foreground pt-[7.5px] font-semibold text-sm ml-1">
            [ Intro ]
          </p>
        </div>
      </div>
      <div className="min-h-screen flex flex-col bg-white relative md:pt-[64px]">
        <div className="absolute top-2 left-9 md:left-8 text-left">
          <p
            className="text-black font-semibold text-xs md:mb-60 space-y-16
          md:space-y-0"
          >
            TO START ANALYSIS
          </p>
        </div>
        <div
          className=" flex-1 flex flex-col md:flex-row items-center
       justify-center relative mb-32 md:mb-60 space-y-16 md:space-y-0"
        >
          <div
            className="relative md:absolute md:left-[40%] md:-translate-x-full
          flex flex-col items-center cursor-pointer"
          >
            <Diamond
              ref={outerDiamondRefCamera}
              className="!w-[120px] !h-[120px] md:!w-[300px] md:h![300px]
               rotate-45 border-gray-800"
            />
            <Diamond
              ref={midDiamondRefCamera}
              className="!w-[110px] !h-[110px] md:!w-[290px] md:h![290px] absolute
               top-1/2 left-1/2  translate-y-1/2 rotate-45 border-gray-800"
              dotted borderColourClass="border-gray-800"
            />
            <Diamond
              ref={innerDiamondRefCamera}
              className="!w-[120px] !h-[120px] md:!w-[300px] md:h![300px]
               rotate-45 border-gray-800"
            />

            {/* Camera Icon & Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Camera className="w-6 h-6 md:w-12 md:h-12" />
              <div className="w-[40px] md:w-[80px] h-px bg-black" />
              <p className="text-[7px] md:text-[10px] font-semibold mt-1 leading-tight">
                ALLOW A.I. <br /> TO SCAN YOUR FACE
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
