import React, { useEffect, useState } from "react";

const Final = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [activeSection, setActiveSection] = useState("race");

  useEffect (() => {
    const storedResult = localStorage.getItem("analysisResult");
    if (storedResult) {
        try {
            const parsedResult = JSON.parse(storedResult);
            parsedResult.data && setAnalysisResult(parsedResult.data);
        } catch (error) {
            console.error("Error parsing analysis result:", error);
        }
    }
  }, []);



  return (
    <>
    <div className="h-screen flex flex-col md:mt-28">
        <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
            <div className="h-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col">
                {/* Header Section */}
                <div className="text-start ml-4 mb-4 md:mb-6 md:ml-0">
                    <h2 className="text-1g md:text-xl font-bold mb-1">A.I. Analysis</h2>
                    <h3 className="text-4xl md:text-6xl font-normal leading-tight">Demographics</h3>
                    <h4 className="text-sm md:text-base mt-1">PREDICTED RACE & AGE</h4>
                </div>
            </div>
        </main>
    </div>
    </>
  )

   
};

export default Final;
