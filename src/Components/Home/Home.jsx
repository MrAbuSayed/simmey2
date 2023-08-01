import React from 'react';
import './Home.css';
import Typed from 'react-typed';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className="homeContainer">
            <h1>Hellow...!!!</h1>
            <h2>Iam <Typed strings={['Abu Sayed']} typeSpeed={200}  backSpeed={200}/> </h2>
            <div className="homeSec">
                <div className="count1">
                <h1><CountUp end={100} duration={1} />+</h1>
                <h1>Complete <br /> Project</h1>
                </div>
                <div className="count1">
                <h1><CountUp end={80} duration={1} />+</h1>
                <h1>Happy <br /> Client</h1>
                </div>
                <div className="count1">
                <h1><CountUp end={40} duration={1} />+</h1>
                <h1>Running <br /> Project</h1>
                </div>
                <div className="count1">
                <h1><CountUp end={100} duration={1} />+</h1>
                <h1>Start <br /> Project</h1>
                </div>
            </div>
           <Link to='/about'> <button className='homeBtn'>About ME</button></Link>
            </div>
        </div>
    );
};

export default Home;