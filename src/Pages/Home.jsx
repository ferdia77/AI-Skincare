import React from 'react'

const Home = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between ">
        <div>
            <a className='px-3 text-xs font-bold '>
                SKINSTRIC
            </a>
            <a className='text-xs'>
                [INTRO]
            </a>
        </div>
        <div>
            <button className='bg-black text-white text-xs cursor-pointer mr-8 my-8 p-2 border
            rounded-md'>
                Enter Code
            </button>
        </div>
      </div>
      <div className='w-full'>
        <div className=' content-center text-7xl flex items-center justify-items-center'>
            Sophisticated <br/> skincare
        </div>
      </div>
      
    </>
  )
}

export default Home