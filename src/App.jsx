import { useState } from "react";
import pic1 from "../src/assets/image 3.png";
import pic2 from "../src/assets/image 2.png";
import pic3 from "../src/assets/image 4.png";
import pic4 from "../src/assets/image 5.png";
import "./App.css";
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
import red from '../src/assets/Black and Red Gyms Back to Business Portrait Banner.png'

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="overflow-hidden">
      {/* -------------------------------------------------------------------------------------- */}
      <nav className="flex items-center justify-between mb-12 py-3 container mx-auto">
        <div>
          <h1 className="font-samu text-3xl font-bold text-red-700">
            Fitness Planet
          </h1>
        </div>

        <div className="flex gap-10 font-bold border px-12 py-2 rounded-full">
          <h2 className="text-white">Home</h2>
          <h2 className="text-white">Service</h2>
          <h2 className="text-white">Contact</h2>
          <h2 className="text-white">About</h2>
        </div>
      </nav>
      {/* -------------------------------------------------------------------------------------- */}
      <div className="container mx-auto">
        <img className="w-full" src={banner} alt="" />
      </div>
      <img
        className="container mx-auto"
        src="https://i.ibb.co/CWC9rwM/bottom-reverse.png"
        alt=""
      />
      {/* -------------------------------------------------------------------------------------- */}
      {/* Change Your Habits */}
      <div className="text-white mt-12 container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Change Your Habits</h1>
        <p>
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym.
        </p>
      </div>

      <div className="flex items-center gap-5 justify-evenly mt-12 container mx-auto">
        {/* pic-1 */}
        <div className=" ">
          <img className="ml-24 rounded-full" src={pic1} alt="" />
          <h1 className="font-samu text-red-600 ml-32 font-bold text-xl mb-2">
            Movement
          </h1>
          <p className="text-white text-center">
            We believe fitness should be accessible to everyone
          </p>
        </div>
        <div className=" ">
          <img className="ml-24 rounded-full" src={pic2} alt="" />
          <h1 className="text-red-600 font-samu ml-40 font-bold text-xl mb-2">
            Time
          </h1>
          <p className="text-white">
            We believe fitness should be accessible to everyone
          </p>
        </div>
        <div className=" ">
          <img className="ml-24 rounded-full" src={pic3} alt="" />
          <h1 className="text-red-600 font-samu ml-32 font-bold text-xl mb-2">
            Practice
          </h1>
          <p className="text-white text-center">
            We believe fitness should be accessible to everyone
          </p>
        </div>
        <div className=" ">
          <img className="ml-24 rounded-full" src={pic4} alt="" />
          <h1 className="text-red-600 font-samu ml-32 font-bold text-xl mb-2">
            Weight Loss
          </h1>
          <p className="text-white text-center">
            We believe fitness should be accessible to everyone
          </p>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      {/* Run an Extra Mile Easily */}
      <section className="run px-20 mt-20 py-12 flex items-center justify-between container mx-auto rounded-xl">
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
        <div>
          <img className="w-[400px]" src={run} alt="" />
        </div>
      </section>

      {/* -------------------------------------------------------------------------------------- */}
      {/* Trainings and Exercises */}
      <div className="container mx-auto mt-20">
        <h1 className="text-white text-6xl font-bold mb-3">
          Trainings and Exercises
        </h1>
        <p className="text-white">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym.
        </p>
      </div>

      {/* picture 2 line  */}
      <section className="grid grid-cols-3 container mx-auto mt-10 mb-12">
        <img className="" src={img1} alt="" />
        <img className="h-[350px] " src={img2} alt="" />
        <img className="h-[350px] " src={img3} alt="" />
        <img className="h-[340px]" src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </section>
      {/* -------------------------------------------------------------------------------------- */}
      {/* bmi cALCULATOR */}
      <section className="run px-20 py-10 flex justify-between items-center container mx-auto mt-20 rounded-3xl mb-20">
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
      <div className="text-white text-center">
        <h1 className="text-6xl font-bold mb-3">Meet Our Team</h1>
        <p>
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym.
        </p>
      </div>

      <section className="grid grid-cols-3 container mx-auto gap-10 mt-12 bg-gray-800 px-10 py-10 rounded-2xl">
        <img
          className="hover:scale-[1.10] w-[420px] h-[400px]"
          src={man1}
          alt=""
        />
        <img className="w-[420px] h-[400px]" src={man2} alt="" />
        <img className="w-[420px] h-[400px]" src={man3} alt="" />
        <img className="w-[420px] h-[400px]" src={man4} alt="" />
        <img className="w-[420px] h-[400px]" src={man5} alt="" />
        <img className="w-[420px] h-[400px]" src={man6} alt="" />
      </section>
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
        className="container mx-auto"
        src="https://i.ibb.co/CWC9rwM/bottom-reverse.png"
        alt=""
      />

      {/* ------------------------------------------------------------------------------------------ */}

      <section className="grid grid-cols-4 container  mx-auto">
        <div className="bg-red-900">
          <div className="mt-20">
            <h1 className="text-white text-3xl font-bold">Postural Fitness</h1>
            <p className="text-white mt-2">
              Complete recovery program for desk-job related injuries.
            </p>
            <button className="text-blue-400 mt-4 underline">Read More</button>
          </div>
        </div>
        <div className="explore">
          <img
            className="  transform transition-transform duration-800 hover:scale-105
          h-[280px] hover:scale-30 w-[450px]"
            src={one}
            alt=""
          />
        </div>
        <div className="bg-red-900">
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
        <div>
          <img
            className="hover:animate-pulse h-[280px] w-[450px]"
            src={two}
            alt=""
          />
        </div>
        <div>
          <img className="h-[280px] w-[450px]" src={three} alt="" />
        </div>
        <div className="bg-red-900">
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
        <div>
          <img
            className="hover:animate-pulse h-[280px] w-[450px]"
            src={four}
            alt=""
          />
        </div>
        <div className="bg-red-900">
          <div className="mt-20">
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
      <img className=" container mx-auto" src="https://i.ibb.co/xG92BJS/top.png" alt="" />

      {/* ------------------------------------------------------------------------------------------ */}

      {/* -------------------------------------------------------------------------------------- */}
      <footer className="mt-32 container mx-auto">
        <img src={footer} alt="" />
      </footer>
    </section>
  );
}

export default App;
