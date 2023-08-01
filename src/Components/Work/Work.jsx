import React, { useEffect, useState } from 'react';
import './work.css';
import { workData } from '../../app/workData';
import { Link } from 'react-router-dom';
const Work = () => {

    const [works,setWorks]=useState([]);

     useEffect(() => {
         setWorks(workData);
     }, [])
     

    return (
        <div className='work'>
            <h3 className='workHdr'> <span>M</span>y Works</h3><hr />
                <div className="workCont">
                    {
                        works.map(work => {
                            const {id,title,image}=work;
                            return <div className="workSec" key={id}>
                                <img src={image} alt="" />
                                <p>{title}</p>
                                <Link to={`/detailsOn/${id}`}><button className='wrkBtn'>
                                SEE DETAILS</button></Link>
                            </div>
                        })
                    }
                </div>

        </div>
    );
};

export default Work;