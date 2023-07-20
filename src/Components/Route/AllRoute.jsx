import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
// import Navber from '../Nav/Navber'



const AllRoute = () => {
    return (
        <div>
          
               
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/work' element={<Work/>} />
                </Routes>
               

        </div>
    );
};

export default AllRoute;