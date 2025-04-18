import React from 'react'

function Image() {
  return (
   <>
    <div className="relative">
        <img src="/image.jpg" 
        alt="Banner" className="w-full h-140" />
        <div className="absolute top-1/4 left-10 text-white">
          <h1 className="text-4xl font-bold leading-tight"></h1>
          <p className="mt-4 font-semibold"></p>
        </div>
      </div>
   </>
  )
}

export default Image;