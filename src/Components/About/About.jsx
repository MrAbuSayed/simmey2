import React from 'react';
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJsSquare, faPhp, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faAward, faChevronRight, faCompactDisc, faFlagCheckered, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faChessQueen } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import client from '../images/avatar2-184x184.png';

const About = () => {
    return (
        <div className='about'>
            <h3 className='aboutHdr'> <span>A</span>bout Me</h3><hr />
            <div className="aboutSec">
                <div className="myDsc">
                    <div className="dsc1">
                        <h3>Hello! I’m Mr. Abu Sayed.</h3>
                        <p>Back-end & Frond-end developer from UK, London. I have rich experience in wordpress, also I am good at Magento. I love to talk with you about our unique.</p>
                    </div>
                    <div className="dsc2">
                        <div className="child">
                            <h3>Age . . . . 17</h3>
                            <h3>FREELANCE . . . . Available</h3>
                        </div>
                        <div className="child">
                             <h3>RESIDENCE . . . . BD</h3>
                            <h3>ADDRESS . . . . Dhaka, BD</h3>
                        </div>
                    </div>
                </div>

                <div className="service">
                    <h3 className='aboutHdr'> <span>M</span>y Services</h3><hr />

                    <div className="service1">
                        <div className="servChild">
                            <span> <FontAwesomeIcon icon={faHtml5}/> </span>
                            <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
                         </div>
                         <div className="servChild">
                            <span> <FontAwesomeIcon icon={faPhp}/> </span>
                            <p>UI/UX focus on the user, frontend focus on the settings of the user, and backend focus on the data.</p>
                         </div>
                    </div>
                    <div className="service2">
                       <div className="servChild">
                           <span> <FontAwesomeIcon icon={faWordpress}/> </span>
                            <p>WordPress development services improve business websites</p>
                       </div>
                       <div className="servChild">
                           <span> <FontAwesomeIcon icon={faShieldAlt}/> </span>
                            <p>Security consultants can check the code and scan for vulnerabilities.</p>
                       </div>
                    </div>
                </div>

                <div className="pricing">
                <h3 className='aboutHdr'> <span>P</span>ricing</h3>
                    <div className="pricingSec">
                        <div className="price1">
                             <span className="ico"><FontAwesomeIcon icon={faChessQueen}/></span>
                             <h3>Popular</h3>
                             <span className='price'>$ <span>Depending On project</span></span>
                             <p>Web Design</p>
                             <p>Front-End Development </p>
                             <p>Porfolio or landing or Business Website</p>
                             <p>Responsive Dseign</p>
                             <p style={{color:'red',textDecoration:'line-through'}}>Web Development</p>
                             <p style={{color:'red',textDecoration:'line-through'}}>Real-Estate Website</p>
                             <p style={{color:'red',textDecoration:'line-through'}}>SEO Optimizing</p>
                             <Link><button className="byBtn">Start Now  &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faChevronRight}/></button></Link>
                        </div>
                        <div className="price1">    
                        <span className="ico"><FontAwesomeIcon icon={faRocket}/></span>
                             <h3>Popular</h3>
                             <span className='price'>$ <span>Depending On project</span></span>
                             <p>Web Design</p>
                             <p>Front-End Development </p>
                             <p>Porfolio or landing or Business Website</p>
                             <p>Responsive Dseign</p>
                             <p>Web Development</p>
                             <p>Real-Estate Website</p>
                             <p>SEO Optimizing</p>
                             <Link><button className="byBtn">Start Now  &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faChevronRight}/></button></Link>
                        </div>
                    </div>

                </div>
                <div className="clients">
                <h3 className='aboutHdr'> <span>C</span>lients</h3>
                    <div className="client">
                        <div className="client1"><img src="https://th.bing.com/th/id/R.44bb9ce0af9de6ca7dfbba7428d7c4f4?rik=zB0NbwKqALur8g&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2020%2f10%2fFiverr-Logo.png&ehk=h45sJ0i%2bwIYggBVKSdxRuIfOiyPZbh3HkDqPm48LSBY%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                        <div className="client1"><img src="https://th.bing.com/th/id/R.c4be0d43f90ef6897a43eb4e07e1694b?rik=WQW1uaBc4ltHXA&pid=ImgRaw&r=0" alt="" /></div>
                        <div className="client1"><img src="https://th.bing.com/th/id/R.cd07693a805315f46968bb92225e96df?rik=a%2bztXc45KbD3OA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-MZBjj5PTrx4%2fUHtnaI0JG4I%2fAAAAAAAAAG8%2fsmEhJgc2UJg%2fs1600%2ffreelancerlogo.png&ehk=LX3mmr1OQ1LW2QsLoz%2bAcQEsN5dbyRGdDVf5BcqnBJ4%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                        <div className="client1"><img src="https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0" alt="" /></div> 
                       
                    </div>
                </div>

                <div className="testimonil">
                <h3 className='aboutHdr'> <span>T</span>estimonials</h3><hr />
                      <div className="testimoSec">
                            <p>" &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima sequi fugiat hic minus nemo, odit perspiciatis in voluptas! Quae.&nbsp;&nbsp;  "</p>
                            <img src={client} alt="" />
                            <h3>Helena Artist</h3>
                            <span>Art Director</span>
                      </div>  
                </div>

                <div className="fun">
                   <h3 className='aboutHdr'> <span>F</span>un Facts</h3><hr />
                    <div className="funSec">
                        <div className="fun1">
                            <span><FontAwesomeIcon icon={faCompactDisc} /> </span>
                            <p>100+ Albumes Listened</p>
                        </div>
                        <div className="fun1">
                        <span><FontAwesomeIcon icon={faAward} /> </span>
                            <p>15+ Awards Won</p>
                        </div>
                        <div className="fun1">
                        <span><FontAwesomeIcon icon={faJsSquare} /> </span>
                            <p>10,000+ Lines Written</p>
                        </div>
                        <div className="fun1">
                        <span><FontAwesomeIcon icon={faFlagCheckered} /> </span>
                            <p>10+ Countries Visited</p>
                        </div>
                    </div>
                 </div>    
            </div>
        </div>
    );
};

export default About;