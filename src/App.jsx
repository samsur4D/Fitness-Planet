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
// import bradly from "../src/assets/bradley-dunn-fjpl1yrNvNQ-unsplash.jpg";

// import trainer1 from "../src/assets/smartfit-onelani-profile-new.jpg";
// import trainer2 from "../src/assets/1702402108099.jfif";
// import trainer3 from "../src/assets/yukgmll7jcsdiu0sufij.jpg";
// import trainer4 from "../src/assets/gym-workout-personal-trainer-with-checklist-clipboard-consulting-training-sports-gym-black-man-muscular-active-smiling-fitness-coach-writing-health-wellness-exercise_590464-96995.avif";
// import trainer5 from "../src/assets/Different-Types-of-Personal-Fitness-Trainers-And-Their-Average-Costs_--1024x538.webp";


function App() {
  const [count, setCount] = useState(0);
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
      <div className="mb-1 lg:mb-12">
        <img className=" relative md:relative lg:relative w-full" src={banner} alt="" />
        <img
          className="absolute bottom-[360px] md:bottom-[450px] lg:-bottom-[420px] "
          src="https://i.ibb.co/CWC9rwM/bottom-reverse.png"
          alt=""
        />
      </div>

      {/* -------------------------------------------------------------------------------------- */}
      {/* Fitness Package */}
      <section className="exploreooo py-20 bg-fixed p">
        <div className="text-white mt-12 container mx-auto text-center">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-samu font-bold mb-4">
            Our Fitness Package
          </h1>
          <p className="text-lg md:text-2xl lg:text-2xl">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym.
          </p>
        </div>

        <section className=" container mx-auto ">
          <div className="  gap-5 flex items-center justify-center  px-6 py-32 ">
            <img data-aos="fade-right" className=  "h-[230px] md:h-[500px] lg:h-[900px]" src={og} alt="" />
            <img data-aos="zoom-in" className="     h-[230px] md:h-[500px] lg:h-[900px]   " src={red} alt="" />
            <img data-aos="fade-left" className="   h-[230px] md:h-[500px] lg:h-[900px] " src={green} alt=""/>
          </div>
        </section>
      </section>


      {/* -------------------------------------------------------------------------------------- */}
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





      {/* -------------------------------------------------------------------------------------- */}
      {/* Trainings and Exercises */}

      {/* monjur boss */}
     
      <section className="w-full container   mx-auto px-4 py-8">
      <div className="justify-start container mx-auto flex-1 md:mr-96 lg:mr-96">
          <h1 className="text-3xl md:text-4xl lg:text-7xl mb-5 font-bold text-white">
          Trainings and Exercises
          </h1>
          <p className="text-white mb-5">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts.
          </p>
        </div>
  <div className="grid grid-cols-12 gap-2 h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] mb-4">
    <span className="h-full col-span-12 sm:col-span-6 lg:col-span-3 w-full">
      <img className="w-full h-full object-cover" src={img1} alt="Image 1" />
    </span>
    <span className="h-full col-span-12 sm:col-span-6 lg:col-span-6">
      <img className="w-full h-full object-cover" src={img2} alt="Image 2" />
    </span>
    <span className="h-full col-span-12 sm:col-span-6 lg:col-span-3">
      <img className="w-full h-full object-cover" src={img3} alt="Image 3" />
    </span>
  </div>
  <div className="grid grid-cols-12 gap-2 h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
    <span className="h-full col-span-12 sm:col-span-6 lg:col-span-5 w-full">
      <img className="w-full h-full object-cover" src={img4} alt="Image 4" />
    </span>
    <span className="h-full col-span-12 sm:col-span-6 lg:col-span-3">
      <img className="w-full h-full object-cover" src={img5} alt="Image 5" />
    </span>
    <span className="h-full col-span-12 sm:col-span-6 lg:col-span-4">
      <img className="w-full h-full object-cover" src={img6} alt="Image 6" />
    </span>
  </div>
</section>

      {/* -------------------------------------------------------------------------------------- */}
      {/* bmi cALCULATOR */}
      <section className="container mx-auto mt-[700px] lg:mt-[200px] lg mb-20 px-4 py-10 lg:px-20 rounded-3xl bg-gray-800">
  <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
    <div className="w-full lg:w-1/2">
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-5">
        BMI Calculator Chart
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead className="border">
            <tr>
              <th className="border text-white px-4 py-2">BMI</th>
              <th className="border text-white px-4 py-2">Weight Status</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="border px-4 py-2">Below 18.5</td>
              <td className="border px-4 py-2">Underweight</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">18.5 - 24.9</td>
              <td className="border px-4 py-2">Healthy</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">25.0 - 29.9</td>
              <td className="border px-4 py-2">Overweight</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">30.0 - and Above</td>
              <td className="border px-4 py-2">Obese</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="w-full lg:w-1/2">
      <div className="mb-5">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">
          Calculate your BMI
        </h1>
        <p className="text-white">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Height/Cm"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Weight/Kg"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Age"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Sex"
            className="input input-bordered w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Select an activity factor"
          className="input input-bordered w-full"
        />
      </div>

      <button className="bg-red-600 px-10 py-2 rounded-2xl text-white font-bold mt-4 w-full sm:w-auto">
        Calculate
      </button>
    </div>
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
{/* ____________________________________________________________________________________________________________ */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-10 mt-12 team px-10 py-10 rounded-2xl">
        <div className="coach1 rounded-2xl h-[180px] md:h-[300px] lg:h-[720px] bg-red-600">
          <div className="coach1inner relative md:relative lg:relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 top-1 md:top-20 lg:top-80">
              <h1 className="text-white  text-xl md:text-3xl lg:text-5xl font-bold">Nacho Beristáin</h1>
              <p className="text-white text-sm md:text-xl lg:text-xl mt-3">
                Renowned for his ability to develop power punchers and durable
                fighters.
              </p>
            </span>
          </div>
        </div>

        {/* 2 */}
        <div className="coach2 rounded-2xl h-[180px] md:h-[300px] lg:h-[720px] bg-red-600">
          <div className="coach2inner relative md:relative lg:relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 md:top-20 lg:top-80">
              <h1 className="text-white  text-xl md:text-3xl lg:text-5xl font-bold">Thomas Shelby</h1>
              <p className="text-white text-sm md:text-xl lg:text-xl mt-3">
                Experience: Over 40 years in boxing as a trainer and former
                professional boxer.
              </p>
            </span>
          </div>
        </div>
        {/* 3 */}
        <div className="coach3 rounded-2xl h-[180px] md:h-[300px] lg:h-[720px] bg-red-600">
          <div className="coach3inner relative  md:relative lg:relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 md:top-20 lg:top-80">
              <h1 className="text-white  text-xl md:text-3xl lg:text-5xl font-bold">Virgil Hunter</h1>
              <p className="text-white text-sm md:text-xl lg:text-xl mt-3">
                Experience: Over 40 years in boxing as a trainer and former
                professional boxer.
              </p>
            </span>
          </div>
        </div>
        {/* 4 */}
        <div className="coach4 rounded-2xl h-[180px] md:h-[300px] lg:h-[720px] bg-red-600">
          <div className="coach4inner relative md:relative lg:relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 md:top-20 lg:top-80">
              <h1 className="text-white  text-xl md:text-3xl lg:text-5xl font-bold">Teddy Atlas</h1>
              <p className="text-white text-sm md:text-xl lg:text-xl mt-3">
                Experience: Over 30 years as a boxing trainer and commentator.
              </p>
            </span>
          </div>
        </div>
        {/* 5 */}
        <div className="coach5 rounded-2xl h-[180px] md:h-[300px] lg:h-[720px] bg-red-600">
          <div className="coach5inner relative md:relative lg:relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 md:top-20 lg:top-80">
              <h1 className="text-white  text-xl md:text-3xl lg:text-5xl font-bold">Emanuel Steward</h1>
              <p className="text-white text-sm md:text-xl lg:text-xl mt-3">
                Experience: Over 40 years in boxing as a trainer and manager
                (deceased).
              </p>
            </span>
          </div>
        </div>
        {/* 6 */}
        <div className="coach6 rounded-2xl h-[180px] md:h-[300px] lg:h-[720px] bg-red-600">
          <div className="coach6inner relative md:relative lg:relative rounded-2xl h-full w-full coachbg opacity-80">
            <span className="absolute px-2 md:top-20 lg:top-80">
              <h1 className="text-white  text-xl md:text-3xl lg:text-5xl font-bold">Abel Sanchez</h1>
              <p className="text-white text-sm md:text-xl lg:text-xl mt-3">
                Experience: Over 30 years in boxing as a trainer.
              </p>
            </span>
          </div>
        </div>
      </section>
      {/* Coach  */}



      {/* -------------------------------------------------------------------------------------- */}
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





      {/* ------------------------------------------------------------------------------------------ */}

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


      {/* -------------------------------------------------------------------------------------- */}
      <footer className="mt-32 ">
        <img src={footer} alt="" />
      </footer>
    </section>
  );
}

export default App;
