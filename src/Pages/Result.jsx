"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Diamond from "../Components/Diamond";
import { Camera, Image as ImageIcon } from "lucide-react";
import { Link, useNavigation } from "react-router-dom";

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
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiProgress, setAPIProgress] = useState(0);
  const [apiMessage, setAPIMessage] = useState("");
  const navigate = useNavigation();
  
  const outerDiamondRefCamera = useRef(null);
  const midDiamondRefCamera = useRef(null);
  const innerDiamondRefCamera = useRef(null);
  const outerDiamondRefGallery = useRef(null);
  const midDiamondRefGallery = useRef(null);
  const innerDiamondRefGallery = useRef(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("captureImage");
    if (storedImage) {
      setPreviewImage(storedImage);
    } else {
      setPreviewImage(null);
    }
    if (outerDiamondRefCamera.current) {
      continuousRotation(outerDiamondRefCamera.current, 5);
    }
    if (midDiamondRefCamera.current) {
      continuousRotation(midDiamondRefCamera.current, 5.25);
    }
    if (innerDiamondRefCamera.current) {
      continuousRotation(innerDiamondRefCamera.current, 5.5);
    }
    if (outerDiamondRefGallery.current) {
      continuousRotation(outerDiamondRefGallery.current, 5);
    }
    if (midDiamondRefGallery.current) {
      continuousRotation(midDiamondRefGallery.current, 5.25);
    }
    if (innerDiamondRefGallery.current) {
      continuousRotation(innerDiamondRefGallery.current, 5.5);
    }

    return () => {
      setPreviewImage(null);
    };
  }, []);

  // const handleCameraAccess = () => {
  //   Router.push("/scan");
  // };

  const handleGalleryUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = event.target.files[0]; // Grab the first file chosen

    if (file) {
      const reader = new FileReader(); // Create a FileReader object

      reader.onloadend = () => {
        const base64String = reader.result;
        setPreviewImage(base64String); // Set the Base64 string to previewImage
        localStorage.setItem("capturedImage", base64String);
      };

      reader.readAsDataURL(file); // Read the file as a data
    }
  };

  const handleProcessImage = async () => {
    if (!previewImage) return;

    setIsLoading(true);
    setAPIMessage("Starting image processing...");
    setAPIProgress(0);

    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: previewImage }),
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const result = await response.json();
      localStorage.setItem("analysisResult", JSON.stringify(result));

      setAPIMessage("Processing complete!");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigate("/select");
    } catch (error) {
      console.error("Error processing image:", error);
      setAPIMessage("An error occurred during processing.");
    } finally {
      setIsLoading(false);
      setAPIProgress(0);
      setAPIMessage("");
    }
  };

  return (
    <>
      <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3">
        <div className="flex flex-row pt-1 scale-75 pl-12">
          <a
            className="inline-flex items-center justify-center gap-2
           whitespace-nowrap rounded-md transition-colors focus-visible:outline-none
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
              dotted
              borderColorClass="border-gray-800"
            />
            <Diamond
              ref={innerDiamondRefCamera}
              className="!w-[120px] !h-[120px] md:!w-[300px] md:h![300px]
               rotate-45 border-gray-800"
              dotted
              borderColorClass="border-gray-800"
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

        {/* GALLERY SECTION */}
        <div
          className="relative md:absolute md:left-[60%]  flex flex-col items-center
        cursor-pointer mt-12"
          onClick={handleGalleryUpload}
        >
          <Diamond
            ref={outerDiamondRefGallery}
            className="!w-[120px] !h-[120px] md:!w-[300px] md:h![300px]
               rotate-45 border-gray-800"
          />
          <Diamond
            ref={midDiamondRefGallery}
            className="!w-[110px] !h-[110px] md:!w-[290px] md:h![290px] absolute
               top-1/2 left-1/2  translate-y-1/2 rotate-45 border-gray-800"
            dotted
            borderColorClass="border-gray-800"
          />
          <Diamond
            ref={innerDiamondRefGallery}
            className="!w-[120px] !h-[120px] md:!w-[300px] md:h![300px]
               rotate-45 border-gray-800"
            dotted
            borderColorClass="border-gray-800"
          />

          {/* Gallery ICON & LABEL */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <ImageIcon className="w-6 h-6 md:w-12 md:h-12" />
            <div className="absolute top-[55%] left[-40px] md:left-[-90px] translate-y-[20px]">
              <div className="w-[40px] md:w-[80px] h-px bg-black" />
              <p className="text-[7px] md:text-[10px] font-semibold mt-1 leading-tight">
                ALLOW A.I.
                <br />
                ACCESS GALLERY
              </p>
            </div>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        {previewImage && (
          <div className="absolute top-4 right-4 md:top-0 md:right-8">
            <h1 className="text-xs md:text-sm font-extrabold mb-1">Preview</h1>
            <div className="w-24 h-24 md:w-32 md:h-32 border rounded overflow-hidden">
              <img
                src={previewImage}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        <div className="absolute bottom-10 w-full flex justify-between px-10 pb-11">
          <div className="relative w-14 h-14 left-4 flex items-center justify-center border border-black rotate-45 scale-[0.85]">
            <span className="absolute rotate-[-45deg] text-xs font-semibold">
              BACK
            </span>
          </div>
          <Link className="absolute inset-0" aria-label="Back" href="/" />
        </div>

        {/* PROCESS BUTTON */}
        {previewImage && (
          <div className="absolute bottom-48 md:bottom-28 right-6 md:right-8">
            <div
              className="relative w-10 h-10 md:w-12 flex items-center justify-center
              border border-black rotate-45 cursor-pointer"
              onClick={handleProcessImage}
            >
              <span className="absolute rotate-[-45deg] text-xs scale-[0.7] md:scale-[0.8] -semibold">
                PROCESS
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
