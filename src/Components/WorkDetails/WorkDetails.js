import React from 'react';
import './workDetails.css';
import { useParams } from 'react-router';
import { workData } from '../../app/workData';
import { Link } from 'react-router-dom';

const WorkDetails = () => {

    const {workId}=useParams();
    const detail= workData.find(wrk => wrk.id===workId);
    const {image,title,dsc}=detail;
    console.log(detail);
    return (
        <div className='workDetail'>
           <div className="wrkTop">
           <h3 className='workHdr'> <span>P</span>rojects Details</h3>
           <Link to="/work"><button className='wrkBtn'>Close</button></Link>
           </div><hr />
            <div className="workDSec">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{dsc}</p>
            <Link to="/contact"><button className='wrkBtn'>Start The Project</button></Link>
            </div>
        </div>
    );
};

export default WorkDetails;