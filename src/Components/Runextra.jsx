import React from 'react';
import limit from "/src/assets/Break your limit.png";
import brown from "/src/assets/Brown Modern Fun Run Promotion Instagram Post.png";
import marathon from "/src/assets/Black And White Modern Global Running Day Celebration And Encouragement  For An Active Lifestyle Instagram Post.png";

const Runextra = () => {
    return (
        <>
          {/* Run an Extra Mile Easily */}
      <section className="run mt-96 exploreoooi bg-fixed px-20 mb-60 py-12 flex items-center justify-between container mx-auto rounded-xl">
        <div className="justify-start flex-1 md:mr-96 lg:mr-96">
          <h1 className="text-3xl md:text-4xl lg:text-7xl mb-5 font-bold text-white">
            Run an Extra Mile Easily
          </h1>
          <p className="text-white mb-5">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts.
          </p>
          <button className="bg-red-600 px-10 py-2 rounded-2xl text-white font-bold">
            Join Now
          </button>
        </div>
        <div className="flex flex-col md:flex-row  lg:flex-row  items-center mt-32 justify-center gap-12">
          <img
            className="hover:scale-125 duration-300 md:w-[230px] lg:w-[400px] rounded-3xl"
            src={limit}
            alt=""
          />
          <img
            className="hover:scale-125 duration-300 md:w-[230px] lg:w-[400px] rounded-3xl"
            src={marathon}
            alt=""
          />
          <img
            className="hover:scale-125 duration-300 md:w-[230px] lg:w-[400px] rounded-3xl"
            src={brown}
            alt=""
          />
        </div>
      </section>


        </>
    );
};

export default Runextra;