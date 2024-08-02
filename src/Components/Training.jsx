import React from 'react';
import img1 from "/src/assets/exercise1.jpg";
import img2 from "/src/assets/exercise2.png";
import img3 from "/src/assets/exercise3.png";
import img4 from "/src/assets/exercise4.png";
import img5 from "/src/assets/exercise5.jpg";
import img6 from "/src/assets/exercise6.jpg";


const Training = () => {
    return (
        <>
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
  <div className="grid grid-cols-12  h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] mb-4">
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
  <div className="grid grid-cols-12  h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
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
        </>
    );
};

export default Training;