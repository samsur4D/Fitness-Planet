import React from 'react';
import TextRevealByWord from './TextRevealByWord';

const About = () => {
    return (
        <section className="container  mx-auto md:mt-44 lg:mt-36 py-12 mb-36 w-full">
            <div className="text-white">
                <h1 className="text-9xl text-white text-center font-bold">About Us</h1>
                <div className="z-10 pt-20 pb-36 flex min-h-[20rem] items-center justify-center rounded-lg border aboutbg bg-fixed dark:bg-black">
                    <TextRevealByWord 
                        text="Hey ! At Fitness Planet, we believe that fitness is a journey, not a destination. Our mission is to provide a welcoming and inclusive environment where everyone can achieve their fitness goals. Whether you're a seasoned athlete or just starting out, our team of dedicated professionals is here to support you every step of the way. We aim to encourage and facilitate a healthy lifestyle for all our members. Our programs are designed to improve physical health, mental well-being, and overall quality of life. Fitness Planet is more than just a gym; it's a community. We strive to create a supportive and motivating environment where members can connect, share experiences, and inspire each other. We are committed to staying at the forefront of the fitness industry by continuously updating our equipment, facilities, and training techniques. Our goal is to provide the most effective and enjoyable fitness experience possible. Our evidence-based approach ensures that every member can achieve tangible results, whether it’s losing weight, building muscle, or improving overall health. From personalized training to group classes, our dedicated staff is here to support you every step of the way, ensuring you reach your fitness goals. Join us at Fitness Planet and take the first step towards a healthier, happier you. Our community is excited to welcome you and support you on your fitness journey!" 
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
