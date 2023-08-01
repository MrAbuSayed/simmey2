import React from 'react';
import './resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheck, faChevronRight, faCode, faGraduationCap,  } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
const Resume = () => {
    return (
        <div className='resume'>
            <h3 className='resumeHdr'> <span>R</span>esume</h3>
            
            <div className="resumeCont">

                <div className="eduExp">
                        <div className="experience">
                    <span className='ExIcon'> <FontAwesomeIcon icon={faBriefcase}/> </span><span>Experience</span>
                            <div className="ex1">
                                <span>2022 - Present</span>
                                <div className="title">
                                    <h3>Web Designer</h3>
                                    <img src="https://th.bing.com/th/id/R.c4be0d43f90ef6897a43eb4e07e1694b?rik=WQW1uaBc4ltHXA&pid=ImgRaw&r=0" alt="" />
                                </div>
                                <i>Upwork Inc.</i>
                                <p>Collaborate with creative and development teams.</p>
                                <button>RECOMENDETION &nbsp;&nbsp; <FontAwesomeIcon icon={faChevronRight}/></button>
                            </div>
                            <div className="ex1">
                            <span>2022 - Present</span>
                                <div className="title">
                                    <h3>Web Developer</h3>
                                    <img src="https://logosmarcas.net/wp-content/uploads/2020/12/Fiverr-Logo.png" alt="" />
                                </div>
                                <i>Fiverr Inc.</i>
                                <p>Monitored technical aspects of the front-end delivery for projects..</p>
                                <button>RECOMENDETION &nbsp;&nbsp; <FontAwesomeIcon icon={faChevronRight}/></button>
                            </div>
                        </div>
                        <div className="education">
                           <span className='EdIcon'> <FontAwesomeIcon icon={faGraduationCap}/> </span><span>Education</span>
                            <div className="edu1">
                                    <span>2020-2022</span>
                                    <h2>S.S.C</h2>
                                    <h3>Kutumbapur High School,Comilla,Bangladesh</h3>
                                    <p>Kutumbapur High School  Private School in Comilla</p>
                                <button>Certificate&nbsp;&nbsp; <FontAwesomeIcon icon={faChevronRight}/></button>
                            </div>
                            <div className="edu1">
                            <span>2022-2022</span>
                                    <h2>Web Developer</h2>
                                    <h3>Youtube</h3>
                                    <h4>youtube,Internet</h4>
                                    <p>Youtube is a best e-learning site  in the world .Youtube  </p>
                                <button>Certificate&nbsp;&nbsp; <FontAwesomeIcon icon={faChevronRight}/></button>
                            </div>
                        </div>
                </div>

                <div className="skill">
                 <h3 className='resumeHdr'> <span>S</span>kill</h3>
                 <div className="skillCont">
                    <div className="skill1">
                        <div className="code">
                            <div className="codeHdr">
                                <span><FontAwesomeIcon icon={faCode}/></span>
                                <h3>CODING</h3>
                            </div>
                            <div className="codeCont">
                                <div className="code1">
                                    <h1 className='H1'>Javascript--80%</h1 >
                                    <div className="cercle1"><span></span></div>
                                </div>
                                <div className="code2">
                                   <h1 className='H1'>React--75%</h1 >
                                  <div className="cercle2"><span></span></div>
                                </div>
                                <div className="code3">
                                    <h1 className='H1'>NextJS--70%</h1 >
                                   <div className="cercle3"><span></span></div>
                                </div>
                                <div className="code4"> 
                                    <h1 className='H1'>Html/CSS--86%</h1 >
                                   <div className="cercle4"><span></span></div>
                                </div>
                                <div className="code5"> 
                                    <h1 className='H1'>Bootstarp--73%</h1 >
                                   <div className="cercle5"><span></span></div>
                                </div>
                                <div className="code6"> 
                                    <h1 className='H1'>Tailwind CSS--66%</h1 >
                                   <div className="cercle6"><span></span></div>
                                </div>
                                <div className="code7"> 
                                    <h1 className='H1'>Jquery--60%</h1 >
                                   <div className="cercle7"><span></span></div>
                                </div>
                                <div className="code8"> 
                                    <h1 className='H1'>SASS--86%</h1 >
                                   <div className="cercle4"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill2">
                        <div className="knowleg">
                            <div className="codeHdr">
                                <span><FontAwesomeIcon icon={faListAlt}/></span>
                                <h3>KNOWLEDGE</h3>
                            </div>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; E-Commerce Website</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Website hosting </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Front-End Development</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Hosting Installation </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; SEO Optimize</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Responsive and mobile-ready</p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; HTML, CSS, jQuery </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Bootstarp/Tailwind CSS </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Search engine marketing </p>
                            <p><FontAwesomeIcon className='kIco' icon={faCheck}/>&nbsp; Search engine Optmizing </p>
                        </div>
                    </div>
                 </div>
                </div>
                

                <div className="testimonil">
                <h3 className='resumeHdr'> <span>Q</span>uote</h3><hr />
                      <div className="testimoSec">
                            <p>" &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima sequi fugiat hic minus nemo, odit perspiciatis in voluptas! Quae.&nbsp;&nbsp;  "</p>
                            <img src="https://ryancv.bslthemes.com/developer/wp-content/uploads/sites/3/2022/07/avatar.png" alt="" />
                            <h3>Mr. Developer</h3>
                            <span>Full-Stuck Dveloper</span>
                      </div>  
                </div>






            </div>
        </div>
    );
};

export default Resume;