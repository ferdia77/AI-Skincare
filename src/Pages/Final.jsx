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

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-[3fr-7fr-5fr] gap-4 mt-10 mb-40 md:gap-6 pb-0 md:mb-0">
                    {/* Selection Coloumn */}
                    <div className="bg-gray-100 p-4 rounded-lg space-y-4">
                        {["race","age", "gender"].map((section) => (
                            <>
                                <div 
                                    key={section}
                                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                        activeSection === section
                                            ? "bg-black text-white"
                                            : "bg-white"
                                    }`}
                                    onClick={() => setActiveSection(section)}
                                />
                                    <h4 className="text-sm font-medium mb-1">
                                        {section.toUpperCase()}
                                    </h4>
                                    {analysisResult ? (
                                        <p className="text-xs">
                                            {section === "age"
                                            ? getHighestConfidence(section)[0]
                                            : getHighestConfidence(section)[0].toUpperCase()}
                                        </p>
                                    ) : (
                                        <p className="text-xs">Loading...</p>
                                    )}
                                </div>
                            </>
                            
                        ))}
                        
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
  )

   
};

export default Final;
