import React from 'react';
import Banner from '../Components/Banner';
import Package from '../Components/Package'
import Runextra from '../Components/Runextra';
import Video from '../Components/Video';
import Training from '../Components/Training';
import Bmi from '../Components/Bmi';
import Ourteam from '../Components/Ourteam';
import Freshapproach from '../Components/Freshapproach';
import Fourgrid from '../Components/Fourgrid';
import Footer from '../Components/Footer'
import About from '../Components/About';

const Home = () => {
    return (
        <div>
           <Banner></Banner>

           <About></About>

           <Package></Package>

           <Runextra></Runextra>

           <Video></Video>

           <Training></Training>

           <Bmi></Bmi>

           <Ourteam></Ourteam>

           <Freshapproach></Freshapproach>

           <Fourgrid></Fourgrid>

           <Footer></Footer>
        </div>
    );
};

export default Home;