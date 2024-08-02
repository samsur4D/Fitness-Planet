import React from 'react';

const Ourteam = () => {
    return (
        <>
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
        </>
    );
};

export default Ourteam;