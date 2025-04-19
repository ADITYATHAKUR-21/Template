import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-4 bg-white">

      {/* Left Card */}
      <div className="flex-1 bg-gray-50  rounded-2xl shadow-lg text-center p-10 ">
        <img
          src="/2.jpg"
          alt="Jack Daniel's Honey"
          className="mx-auto w-56"
        />
        <h2 className="mt-4 font-semibold">Jack Tennessee Honey</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Hmm, Jack is a cool guy, honey is a lustrous lady, so much good a
          combination in just a bottle for in. I love it.
        </p>
        <p className="mt-3 text-sm font-semibold">Manu Paji</p>
        <p className="text-xs text-gray-400">20 April  2025</p>
      </div>


      {/* Middle Card */}
        <div className="flex-1 bg-gray-50 p-6 rounded-2xl shadow-lg  text-center">
          <img
            src="/1.jpg"
            alt=""
            className="mx-auto w-full h-80 mb-4"
          />
          <p className="text-sm text-gray-700">
          Jd Tennessee Whiskey is the world's best-selling whiskey. Every bottle is distilled and bottled at the J  Distillery
           in Lynchburg, Tennessee. Established in 1966, the Jack Daniel Distillery is the oldest registered distillery in . Made from the
            finest corn, rye, and barley malt, these choice grains are mixed with the iron-free water that flows from the Cave Spring on the
             distillery grounds.
             
          </p>
        </div>
      

      {/* Right Card */}
      <div className="flex-1 bg-gray-50 p-6 rounded-2xl shadow-lg">
        <img
          src="/ 3.jpg"

          alt="Single Barrel"
          className="w-full rounded-xl"
        />
        <h2 className="mt-4 font-semibold text-lg">
         JS SINGLE BARREL AND  DUTY FREE UNVEILS HAND SELECTED PERSONAL COLLECTION
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Jb Single Barrel and  Duty-Free are debuting its hand-selected Personal Collection program this summer.
        </p>
      </div>
    </div>
  );
};

export default Card;