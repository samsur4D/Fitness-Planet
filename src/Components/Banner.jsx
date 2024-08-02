import React, { useState } from 'react';
import banner from "/src/assets/Black and Red Gyms Back to Business Landscape Banner (1).png";

const Banner = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <>
           {/* nav bar */}
      <nav className="flex items-center justify-between mb-12 py-3 container mx-auto">
        <div>
          <h1 className="font-samu text-3xl font-bold text-red-700">
            Fitness Planet
          </h1>
        </div>

        <div className="hidden lg:flex gap-10 font-bold border px-12 py-2 rounded-full">
          <h2 className="text-white">Home</h2>
          <h2 className="text-white">Service</h2>
          <h2 className="text-white">Contact</h2>
          <h2 className="text-white">About</h2>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setDrawerOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {drawerOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="fixed navbero top-0 right-0 w-64 bg-white h-full shadow-md z-50">
              <div className="flex justify-end p-4">
                <button
                  className="text-black focus:outline-none"
                  onClick={() => setDrawerOpen(false)}
                >
                  <svg
                    className="w-6 text-white h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center gap-4 py-6">
                <h2 className="text-white font-bold font-samu text-4xl">
                  Home
                </h2>
                <h2 className="text-white font-bold font-samu text-4xl">
                  Service
                </h2>
                <h2 className="text-white font-bold font-samu text-4xl">
                  Contact
                </h2>
                <h2 className="text-white font-bold font-samu text-4xl">
                  About
                </h2>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* -------------------------------------------------------------------------------------- */}
      {/* banner */}
      <div className="mb-1 lg:mb-12">
        <img className=" relative md:relative lg:relative w-full" src={banner} alt="" />
        <img
          className="absolute bottom-[360px] md:bottom-[450px] lg:-bottom-[420px] "
          src="https://i.ibb.co/CWC9rwM/bottom-reverse.png"
          alt=""
        />
      </div>
        </>
    );
};

export default Banner;