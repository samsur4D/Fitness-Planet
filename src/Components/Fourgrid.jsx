import React from 'react';
import one from "/src/assets/posture.webp";
import two from "/src/assets/obese.webp";
import three from "/src/assets/slim.webp";
import four from "/src/assets/medium-shot-man-working-gym-1-scaled.webp";

const Fourgrid = () => {
    return (
        <>
          <section className="grid md:grid-cols-2 lg:grid-cols-4 ">

<div className="bg-red-900 hover:bg-gray-800  transition-colors duration-1000">
  <div className="mt-20 ">
    <h1 className="text-white text-3xl font-bold">Postural Fitness</h1>
    <p className="text-white mt-2">
      Complete recovery program for desk-job related injuries.
    </p>
    <button className="text-blue-400 mt-4 underline">Read More</button>
  </div>
</div>
<div className="explore overflow-hidden">
  <img
    className="hover:scale-125 duration-1000
  h-[280px]  w-[450px]"
    src={one}
    alt=""
  />
</div>
  {/* -------------------------- */}
  <div className="lg:hidden">
  <img
    className="opacity-25  hover:opacity-100 transition-opacity duration-1000 h-[280px] w-[450px]"
    src={three}
    alt=""
  />
</div>
<div className="bg-red-900 lg:hidden hover:bg-gray-800 duration-1000 transition-colors">
  <div className="mt-20">
    <h1 className="text-white text-3xl font-bold">
      Slimming and Shaping
    </h1>
    <p className="text-white mt-2">
      Sculpt your best self with our non-surgical program.
    </p>
    <button className="text-blue-400 mt-4 underline">Read More</button>
  </div>
</div>
  {/* -------------------------- */}
<div className="bg-red-900  hover:bg-gray-800 duration-1000 transition-colors">
  <div className="mt-20">
    <h1 className="text-white text-3xl font-bold">
      Obesity Management
    </h1>
    <p className="text-white mt-2">
      Personalized program for children and adults.
    </p>
    <button className="text-blue-400 mt-4 underline">Read More</button>
  </div>
</div>
<div className="overflow-hidden">
  <img
    className="hover:scale-125 duration-1000 h-[280px] w-[450px]"
    src={two}
    alt=""
  />
</div>
{/* -------------------------- */}

{/* -------------------------- */}
<div className="hidden md:hidden lg:block">
  <img
    className="opacity-25 hover:opacity-100 transition-opacity duration-1000 h-[280px] w-[450px]"
    src={three}
    alt=""
  />
</div>
<div className="bg-red-900 hidden md:hidden lg:block hover:bg-gray-800 duration-1000 transition-colors">
  <div className="mt-20">
    <h1 className="text-white text-3xl font-bold">
      Slimming and Shaping
    </h1>
    <p className="text-white mt-2">
      Sculpt your best self with our non-surgical program.
    </p>
    <button className="text-blue-400 mt-4 underline">Read More</button>
  </div>
</div>
{/* ------------------------ */}

{/* ------------------------ */}
<div className="overflow-hidden">
  <img
    className="hover:scale-125 duration-1000 h-[280px] w-[450px]"
    src={four}
    alt=""
  />
</div>
<div className="bg-red-900 hover:bg-gray-800  transition-colors duration-1000">
  <div className="mt-20 ">
    <h1 className="text-white text-3xl font-bold">
      Fitness for Seniors
    </h1>
    <p className="text-white mt-2">
      Fitness recovery program specially designed for senior citizens.
    </p>
    <button className="text-blue-400 mt-4 underline">Read More</button>
  </div>
</div>
</section>
<img className=" " src="https://i.ibb.co/xG92BJS/top.png" alt="" />

        </>
    );
};

export default Fourgrid;