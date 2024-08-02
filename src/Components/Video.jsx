import React from 'react';

const Video = () => {
    return (
       <>
           {/* viedo  */}
           <section className="container  flex flex-col md:flex-col lg:flex-row justify-center items-center mb-60 mt-60 mx-auto">
        <div className="w-[400px] md:w-[1100px] lg:w-[1100px]   lg:h-[600px]">
          <video
            className="w-full h-full object-cover"
            controls
            loop
            autoplay
            muted
          >
            <source
              src="../public/Black and White Modern Fitness YouTube Intro Video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="concern relative w-full h-[300px] md:h-[600px] lg:h-[600px]">
          <span className="bg-black opacity-50 w-full h-full text-center py-40 ">
            <h1 className="text-white text-4xl md:lg:text-9xl lg:text-9xl font-bold ">Your Health</h1>
            <h1 className="text-white text-4xl md:lg:text-9xl lg:text-9xl font-bold ">Our Concern</h1>
          </span>
        </div>
      </section>
       </>
    );
};

export default Video;