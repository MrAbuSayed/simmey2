import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Resume from '../Resume/Resume';
import WorkDetails from '../WorkDetails/WorkDetails';
import Bolgs from '../Blogs/Bolgs';
// import Navber from '../Nav/Navber'



const AllRoute = () => {
    return (
        <div>
          
               
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/resume' element={<Resume/>} />
                    <Route path='/work' element={<Work/>} />
                    <Route path='/blog' element={<Bolgs/>} />
                    {/* Dynamic Route */}
                    <Route path='/detailsOn/:workId' element={<WorkDetails/>} />
                </Routes>
               

        </div>
    );
};

export default AllRoute;