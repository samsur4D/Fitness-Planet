import React from "react";
import og from "/src/assets/og.png";
import green from "/src/assets/Black and Green Gyms Back to Business Portrait Banner.png";
import red from "/src/assets/Black and Red Gyms Back to Business Portrait Banner.png";
import LetterPullup from "../Textpullup[";
  // import LetterPullup from "@/components/magicui/letter-pullup";

const Package = () => {
  return (
    <>
      {/* Fitness Package */}
      <section className="exploreooo py-20 bg-fixed p">
        <div className="text-white mt-12 container mx-auto text-center">
          <h1 className="text-4xl tracking-in-expand md:text-7xl lg:text-9xl font-samu font-bold mb-4">
            Our Fitness Package
          </h1>
          <LetterPullup words={" We believe fitness should be accessible to everyone..everywhere..regardless of income or access to a gym"} delay={0.05} />
          <p className="hidden text-lg font-bold md:text-2xl lg:text-2xl">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </p>
        </div>

        <section className=" container mx-auto ">
          <div className="  gap-5 flex items-center justify-center  px-6 py-32 ">
            {/* <img data-aos="fade-right" className=  "h-[230px] md:h-[500px] lg:h-[900px]" src={og} alt="" />
            <img data-aos="zoom-in" className="     h-[230px] md:h-[500px] lg:h-[900px]   " src={red} alt="" />
            <img data-aos="fade-left" className="   h-[230px] md:h-[500px] lg:h-[900px] " src={green} alt=""/> */}
            <img
              className="h-[230px] md:h-[500px] lg:h-[900px]"
              src={og}
              alt=""
            />
            <img
              className="     h-[230px] md:h-[500px] lg:h-[900px]   "
              src={red}
              alt=""
            />
            <img
              className="   h-[230px] md:h-[500px] lg:h-[900px] "
              src={green}
              alt=""
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Package;
