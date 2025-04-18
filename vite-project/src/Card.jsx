import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-4 bg-white">

      {/* Left Card */}
      <div className="flex-1 bg-gray-50  rounded-2xl shadow-lg text-center p-10 ">
        <img
          src="./public/Card (2).jpg"
          alt="Jack Daniel's Honey"
          className="mx-auto w-56"
        />
        <h2 className="mt-4 font-semibold">Jack Tennessee Honey</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Hmm, Jack is a cool guy, honey is a lustrous lady, so much good a
          combination in just a bottle for in. I love it.
        </p>
        <p className="mt-3 text-sm font-semibold">Vivek Dutt</p>
        <p className="text-xs text-gray-400">15 June 2020</p>
      </div>


      {/* Middle Card */}
        <div className="flex-1 bg-gray-50 p-6 rounded-2xl shadow-lg  text-center">
          <img
            src="./public/Card (1).jpg"
            alt=""
            className="mx-auto w-full h-80 mb-4"
          />
          <p className="text-sm text-gray-700">
          jd Tennessee Whiskey is the world's best-selling whiskey. Every bottle is distilled and bottled at the Jack Daniel Distillery
           in Lynchburg, Tennessee. Established in 1866, the Jack Daniel Distillery is the oldest registered distillery in America. Made from the
            finest corn, rye, and barley malt, these choice grains are mixed with 
             
          </p>
        </div>
      

      {/* Right Card */}
      <div className="flex-1 bg-gray-50 p-6 rounded-2xl shadow-lg">
        <img
          src="./public/Card  (3).jpg"
          alt="Single Barrel"
          className="w-full rounded-xl"
        />
        <h2 className="mt-4 font-semibold text-lg">
         js SINGLE BARREL AND DELHI DUTY FREE UNVEILS HAND SELECTED PERSONAL COLLECTION
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          js Single Barrel and Delhi Duty-Free are debuting its hand-selected Personal Collection program this summer.
        </p>
      </div>
    </div>
  );
};

export default Card;