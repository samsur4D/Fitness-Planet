import React from 'react';

const Bmi = () => {
    return (
        <>
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

        </>
    );
};

export default Bmi;