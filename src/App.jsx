import { useState } from "react";
import pic1 from "../src/assets/image 3.png";
import pic2 from "../src/assets/image 2.png";
import pic3 from "../src/assets/image 4.png";
import pic4 from "../src/assets/image 5.png";
import "./App.css";
import limit from "../src/assets/Break your limit.png";
import brown from "../src/assets/Brown Modern Fun Run Promotion Instagram Post.png";
import marathon from "../src/assets/Black And White Modern Global Running Day Celebration And Encouragement  For An Active Lifestyle Instagram Post.png";
import banner from "../src/assets/Black and Red Gyms Back to Business Landscape Banner (1).png";
import run from "../src/assets/Rectangle 22.png";
import img1 from "../src/assets/exercise1.jpg";
import img2 from "../src/assets/exercise2.png";
import img3 from "../src/assets/exercise3.png";
import img4 from "../src/assets/exercise4.png";
import img5 from "../src/assets/exercise5.jpg";
import img6 from "../src/assets/exercise6.jpg";
import man1 from "../src/assets/trainer1.png";
import man2 from "../src/assets/trainer2.png";
import man3 from "../src/assets/trainer3.png";
import man4 from "../src/assets/trainer4.png";
import man5 from "../src/assets/trainer5.png";
import man6 from "../src/assets/trainer6.png";
import footer from "../src/assets/footer.png";
import og from "../src/assets/og.png";
import green from "../src/assets/Black and Green Gyms Back to Business Portrait Banner.png";
import one from "../src/assets/posture.webp";
import two from "../src/assets/obese.webp";
import three from "../src/assets/slim.webp";
import four from "../src/assets/medium-shot-man-working-gym-1-scaled.webp";
import red from "../src/assets/Black and Red Gyms Back to Business Portrait Banner.png";
import bradly from "../src/assets/bradley-dunn-fjpl1yrNvNQ-unsplash.jpg";

import trainer1 from "../src/assets/smartfit-onelani-profile-new.jpg";
import trainer2 from "../src/assets/1702402108099.jfif";
import trainer3 from "../src/assets/yukgmll7jcsdiu0sufij.jpg";
import trainer4 from "../src/assets/gym-workout-personal-trainer-with-checklist-clipboard-consulting-training-sports-gym-black-man-muscular-active-smiling-fitness-coach-writing-health-wellness-exercise_590464-96995.avif";
import trainer5 from "../src/assets/Different-Types-of-Personal-Fitness-Trainers-And-Their-Average-Costs_--1024x538.webp";
// import trainer1 from '../src/assets'
// import trainer1 from '../src/assets'
// import trainer1 from '../src/assets'
// import trainer1 from '../src/assets'

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className="overflow-hidden">
      {/* -------------------------------------------------------------------------------------- */}
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
      <div className="mb-60">
        <img className=" relative w-full" src={banner} alt="" />
        <img
          className="absolute -bottom-96 "
          src="https://i.ibb.co/CWC9rwM/bottom-reverse.png"
          alt=""
        />
      </div>

      {/* -------------------------------------------------------------------------------------- */}
      {/* Change Your Habits */}
      <section className="exploreooo bg-fixed p">
        <div className="text-white mt-12 container mx-auto text-center">
          <h1 className=" text-9xl font-samu font-bold mb-4">
            Our Fitness Package
          </h1>
          <p className="text-2xl">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </p>
        </div>

        <section className=" container mx-auto ">
          <div className="  gap-5 flex items-center justify-center  px-6 py-32 ">
            <img data-aos="fade-right" className="h-[900px]" src={og} alt="" />
            <img data-aos="zoom-in" className="h-[900px]" src={red} alt="" />
            <img
              data-aos="fade-left"
              className="h-[900px]"
              src={green}
              alt=""
            />
          </div>
        </section>
      </section>

      {/* -------------------------------------------------------------------------------------- */}
      {/* Run an Extra Mile Easily */}

      <section className="run mt-96 exploreoooi bg-fixed px-20 mb-60 py-12 flex items-center justify-between container mx-auto rounded-xl">
        <div className="justify-start flex-1 mr-96">
          <h1 className="text-7xl mb-5 font-bold text-white">
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
        <div className="flex items-center mt-32 justify-center gap-12">
          <img
            className="hover:scale-125 duration-300 w-[400px] rounded-3xl"
            src={limit}
            alt=""
          />
          <img
            className="hover:scale-125 duration-300 w-[400px] rounded-3xl"
            src={marathon}
            alt=""
          />
          <img
            className="hover:scale-125 duration-300 w-[400px] rounded-3xl"
            src={brown}
            alt=""
          />
        </div>
        {/* <div className="w-[600px] h-[400px]">
    <video className="w-full h-full object-cover" controls>
      <source src="../public/Black and White Modern Fitness YouTube Intro Video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div> */}
      </section>

      <section className="container  flex justify-center items-center mb-60 mt-60 mx-auto">
        <div className="w-[1100px]  h-[600px]">
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
        <div className="concern relative w-full h-[600px]">
          <span className="bg-black opacity-50 w-full h-full text-center py-40 ">
            <h1 className="text-white text-9xl font-bold ">Your Health</h1>
            <h1 className="text-white text-9xl font-bold ">Our Concern</h1>
          </span>
        </div>
      </section>

      {/* -------------------------------------------------------------------------------------- */}
      {/* Trainings and Exercises */}

      {/* monjur boss */}

      <section className="w-full  container mx-auto">
        <div className="grid grid-cols-12 h-[300px] ">
          <span className="h-full  col-span-3 w-full">
            <img className="w-full h-full object-cover" src={img1} alt="" />
          </span>
          <span className="h-full  col-span-6">
            <img className="w-full h-full object-cover" src={img2} alt="" />
          </span>
          <span className="h-full  col-span-3">
            <img className="w-full h-full object-cover" src={img3} alt="" />
          </span>
        </div>
        <div className="grid grid-cols-12 h-[300px] ">
          <span className="h-full  col-span-5 w-full">
            <img className="w-full h-full object-cover" src={img4} alt="" />
          </span>
          <span className="h-full  col-span-3">
            <img className="w-full h-full object-cover" src={img5} alt="" />
          </span>
          <span className="h-full  col-span-4">
            <img className="w-full h-full object-cover" src={img6} alt="" />
          </span>
        </div>
      </section>
      {/* -------------------------------------------------------------------------------------- */}
      {/* bmi cALCULATOR */}
      <section className="run mt-60 px-20 py-10 flex justify-between items-center container mx-auto mt-20 rounded-3xl mb-20">
        <div>
          <h1 className="text-white text-3xl font-bold mb-5">
            BMI Calculator Chart
          </h1>
          {/*  */}
          <div className="overflow-x-auto ">
            <table className="table">
              {/* head */}
              <thead className="border">
                <tr>
                  <th className="border text-white">BMI</th>
                  <th className="border text-white">Weight Status</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {/* row 1 */}
                <tr>
                  <td className="border">Below 18.5</td>
                  <td className="border">Underweight</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="border">18.5 - 24.9</td>
                  <td className="border">Healthy</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="border">25.0 - 29.9</td>
                  <td className="border">Overweight</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td className="border">30.0 - and Above</td>
                  <td className="border">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  */}
        </div>

        <div>
          <div>
            <h1 className="text-white text-3xl font-bold mb-1">
              Calculate your BMI
            </h1>
            <p className="text-white">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym.{" "}
            </p>
          </div>

          <div>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Height/Cm"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Weight/Kg"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex gap-5 mt-3">
              <input
                type="text"
                placeholder="Age"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Sex"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              type="text"
              placeholder="Select an activity factor"
              className="input input-bordered w-full max-w-[660px] mt-3"
            />
          </div>
          <button className="bg-red-600 px-10 py-2 rounded-2xl text-white font-bold mt-3">
            Calculate
          </button>
        </div>
      </section>
      {/* -------------------------------------------------------------------------------------- */}
      {/* Meet Our Team */}
      <div className="text-white mt-60 text-center">
        <h1 className="text-6xl font-bold mb-3">Meet Our Team</h1>
        <p>
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym.
        </p>
      </div>

      {/* Coach  */}
      <section className="grid grid-cols-3 container mx-auto gap-10 mt-12 team px-10 py-10 rounded-2xl">
        <div className="coach1 rounded-2xl   h-[720px] bg-red-600">
          <div className="coach1inner relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 top-80">
              <h1 className="text-white text-5xl font-bold">Nacho Beristáin</h1>
              <p className="text-white text-xl mt-3">
                Renowned for his ability to develop power punchers and durable
                fighters.
              </p>
            </span>
          </div>
        </div>

        {/* 2 */}
        <div className="coach2 rounded-2xl   h-[720px] bg-red-600">
          <div className="coach2inner relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 top-80">
              <h1 className="text-white text-5xl font-bold">Thomas Shelby</h1>
              <p className="text-white text-xl mt-3">
                Experience: Over 40 years in boxing as a trainer and former
                professional boxer.
              </p>
            </span>
          </div>
        </div>
        {/* 3 */}
        <div className="coach3 rounded-2xl   h-[720px] bg-red-600">
          <div className="coach3inner relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 top-80">
              <h1 className="text-white text-5xl font-bold">Virgil Hunter</h1>
              <p className="text-white text-xl mt-3">
                Experience: Over 40 years in boxing as a trainer and former
                professional boxer.
              </p>
            </span>
          </div>
        </div>
        {/* 4 */}
        <div className="coach4 rounded-2xl   h-[720px] bg-red-600">
          <div className="coach4inner relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 top-80">
              <h1 className="text-white text-5xl font-bold">Teddy Atlas</h1>
              <p className="text-white text-xl mt-3">
                Experience: Over 30 years as a boxing trainer and commentator.
              </p>
            </span>
          </div>
        </div>
        {/* 5 */}
        <div className="coach5 rounded-2xl   h-[720px] bg-red-600">
          <div className="coach5inner relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 top-80">
              <h1 className="text-white text-5xl font-bold">Emanuel Steward</h1>
              <p className="text-white text-xl mt-3">
                Experience: Over 40 years in boxing as a trainer and manager
                (deceased).
              </p>
            </span>
          </div>
        </div>
        {/* 6 */}
        <div className="coach6 rounded-2xl   h-[720px] bg-red-600">
          <div className="coach6inner relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 top-80">
              <h1 className="text-white text-5xl font-bold">Abel Sanchez</h1>
              <p className="text-white text-xl mt-3">
                Experience: Over 30 years in boxing as a trainer.
              </p>
            </span>
          </div>
        </div>
      </section>
      {/* Coach  */}
      {/* -------------------------------------------------------------------------------------- */}
      {/* Background design */}
      {/* <img src="https://i.ibb.co/xG92BJS/top.png" alt="" /> */}
      <section className="services  bg-fixed py-48 px-60 mt-24">
        <div className="flex items-center justify-between gap-72">
          <div className="flex items-center">
            <img className="w-[400px]" src={og} alt="" />
            <img className="w-[400px]" src={green} alt="" />
            {/* <img className="w-[400px]" src={red} alt="" /> */}
          </div>

          <div>
            <h1 className="text-5xl text-white font-bold mb-4">
              A Fresh Approach to Fitness
            </h1>
            <p className="text-white">
              With 16+ years of experience in transformative fitness industry we
              have distilled the common fitness concerns of urban lifestyle and
              boiled them down to four fitness recovery programs. From weight
              management to joint pain, for adolescent to senior citizens, our
              bespoke solutions cater to individual convenience and aspirations.
            </p>
          </div>
        </div>
      </section>
      <img
        className=""
        src="https://i.ibb.co/CWC9rwM/bottom-reverse.png"
        alt=""
      />

      {/* ------------------------------------------------------------------------------------------ */}

      <section className="grid grid-cols-4 ">
        <div className="bg-red-900 hover:bg-gray-800  transition-colors duration-1000">
          <div className="mt-20 ">
            <h1 className="text-white text-3xl font-bold">Postural Fitness</h1>
            <p className="text-white mt-2">
              Complete recovery program for desk-job related injuries.
            </p>
            <button className="text-blue-400 mt-4 underline">Read More</button>
          </div>
        </div>
        {/* -- */}
        <div className="explore overflow-hidden">
          <img
            className="hover:scale-125 duration-1000
          h-[280px]  w-[450px]"
            src={one}
            alt=""
          />
        </div>
        <div className="bg-red-900 hover:bg-gray-800 duration-1000 transition-colors">
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
        <div>
          <img
            className="opacity-25 hover:opacity-100 transition-opacity duration-1000 h-[280px] w-[450px]"
            src={three}
            alt=""
          />
        </div>
        <div className="bg-red-900 hover:bg-gray-800 duration-1000 transition-colors">
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

      {/* ------------------------------------------------------------------------------------------ */}

      {/* -------------------------------------------------------------------------------------- */}
      <footer className="mt-32 ">
        <img src={footer} alt="" />
      </footer>
    </section>
  );
}

export default App;
