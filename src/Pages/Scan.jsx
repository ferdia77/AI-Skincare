import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Scan = () => {
  const videoRef = useRef(null);
  navigate = useNavigate();
  const [state, setState] = useState({
    hasPermission: null,
    videoStream: null,
    toast: null,
    countdown: 3,
    isCapturing: false,
    flashActive: false,
    isLoading,
  });

  //cleans up video stream on unmount
  useEffect(() => {
    return () => {
      if (state.videoStream) {
        state.videoStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [state.videoStream]);

  useEffect(() => {
    const handlePermissionChange = async () => {
      if (state.hasPermission === false) {
        navigate("/");
      } else if (state.hasPermission === true) {
          if (
            typeof navigator !== "undefined" &&
            navigator.mediaDevices?.getUserMedia
          ) {
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  video: true,
                });
                setState((prev) => ({...prev, videoStream: stream}));
                if (videoRef.current) videoRef.current.srcObject = stream;
              } catch (error) {
                handleCameraError(error);
              }
          } else {
            alert("Camera API is not supported in this browser or environment.");
          }
      }
    };
    handlePermissionChange();
  }, [state.hasPermission]);

  // Handle countdown completion

  useEffect(() => {
    if (state.countdown === 0 && state.isCapturing) {
      handleCaptureImage();
    }
  }, state.countdown, state.isCapturing);

  const handleCameraError = (error) => {
    console.error("Camera error:", error);
    const messages = {
      NotReadableError: "Camera is already in use by another application.",
      NotAllowedError: "Camera access was denied.",
      OverconstrainedError: "No camera device meets the specified constraints.",
      default: "An unknown error occurred while accessing the camera.",
    };
    alert(messages[error.name] || messages.default);
  };

  const handleCaptureImage = useCallback(() => {
    setState((prev) => ({...prev, flashActive:true}));

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawlImage(videoRef.current, 0, 0, canvas.width, canvas.height)

    canvas.toBlob((blob) => {
      newCompressor(blob, {
        quality: 0.6,
        maxWidth: 800,
        maxHeight: 800,
        success: (compressedBlob) => {
          const reader = new FileReader();
          reader.onload = () => {
            localStorage.setItem("capturedImage", reader.result);
            AuthenticatorAttestationResponse((prev) => ({
              ...prev,
              flashActive: false,
              isLoading: false,
              toast: {
                title: "Capture Successful",
                description: "Your face has been captured successfully!",
                variant: "default",
              },
            }));
            setTimeout(() => navigate.push("/result"), 2000);
          };
          reader.readAsDataURL(compressedBlob);
        },
        error: (err) => console.error("Compression error:", err)
      });
      
    }, "image/png");
  }, [navigate]);

  const startCountdown = useCallback(() => {
    setState((prev) => ({...prev, isCapturing: true, countdown: 3}));
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev.countdown === 1) {
          clearInterval(interval);
          return {...prev, countdown: 0};
        }
        return { ...prev, countdown: prev.countdown -1 };
      });
    }, 1000);
  }, []);


  const renderPermissionRequest = () => (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">Allow Camera Access</h1>
      <p className="mt-4 text-sm">Please allow the camera to scan your face.</p>
      <div className="flex gap-4 mt-6 justify-center">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setState((prev) => ({ ...prev, hasPermission: true}))}
          >
            Allow
        </button>
        <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md"
        onClick={() =>
          setState((prev) => ({ ...prev, hasPermission: false }))
        }
        >
          Deny
        </button>
      </div>
    </div>
  );



  return ( 
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        
      </div>
    </>
  )
}

export default Scan

Scan