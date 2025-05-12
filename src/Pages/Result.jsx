import React, { useEffect, useState } from 'react'

const Result = () => {
  const RotatingSquare = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setRotation(prevRotation => prevRotation + 10);
      }, 100);

      return () => clearInterval(interval); //cleans up the interval on unmount 
    }, [])
  }

  return (
    <>
      <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3">
        <div className="flex flex-row pt-1 scale-75 pl-12 pt-8">
          <a className="inline-flex items-center justify-center gap-2
           whitespace-nowrap rounded-md transition-colours focus-visible:outline-none
           focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
           disabled:opacity-50 [&_svg]:size-4[&_svg]:shrink-0 h-9 px-4 py-2 
           font-bold text-xs mr-2 line-clamp-4" href='/'>SKINSTRIC</a>
          <p className='text-muted-foreground pt-[7.5px] font-semibold text-sm ml-1'>
            [ Intro ]
          </p>
        </div>
      </div>
      <div className='min-h-screen flex flex-col bg-white relative md:pt-[64px]'>
        <div className='absolute top-2 left-9 md:left-8 text-left'>
          <p className='text-black font-semibold text-xs md:mb-60 space-y-16
          md:space-y-0'>TO START ANALYSIS</p>
        </div>
        <div className=' flex-1 flex flex-col md:flex-row items-center
       justify-center relative mb-32 md:mb-60 space-y-16 md:space-y-0'>
        <div className='relative md:absolute md:left-[40%] md:-translate-x-full
        flex flex-col items-center cursor-pointer'>
          <div className='w-[350px] h-[350px] border border-dotted border-gray-800
           rotate-45 !w-[120px] !h[120px] md!:w-[300px] md:!h-[300px] rotate-45
           border-gray-800'>

          </div>
      </div>

      
        </div>
      </div>
    </>
  )
}

export default Result;