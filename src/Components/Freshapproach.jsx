import React from 'react';
import og from "/src/assets/og.png";
import green from "/src/assets/Black and Green Gyms Back to Business Portrait Banner.png";

const Freshapproach = () => {
    return (
       <>
         {/* Background design */}
      <section className="services bg-fixed py-24 lg:py-48 px-4 lg:px-20 mt-24">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
    <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 lg:gap-0">
      <img className="w-full w-[190px] md:w-[250px] lg:w-[350px]" src={og} alt="Image 1" />
      <img className="w-full w-[190px] md:w-[250px] lg:w-[350px]" src={green} alt="Image 2" />
    </div>

    <div className="mt-8 lg:mt-0 lg:ml-60">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-bold mb-4">
        A Fresh Approach to Fitness
      </h1>
      <p className="text-white text-sm sm:text-base lg:text-lg">
        With 16+ years of experience in transformative fitness industry we have
        distilled the common fitness concerns of urban lifestyle and boiled them
        down to four fitness recovery programs. From weight management to joint
        pain, for adolescent to senior citizens, our bespoke solutions cater to
        individual convenience and aspirations.
      </p>
    </div>
  </div>
</section>


      <img
        className=""
        src="https://i.ibb.co/CWC9rwM/bottom-reverse.png"
        alt=""
      />
       </>
    );
};

export default Freshapproach;