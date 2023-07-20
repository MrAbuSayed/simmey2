import React, { useContext, useState } from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload, faCode, faHome, faPhone, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { faEye, faListAlt, faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { BackgroundChange } from '../../App';
import { faFacebook, faInstagramSquare, faLinkedin, faTelegram, faTwitter, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const Navber = () => {

    const [background,setBackground]=useContext(BackgroundChange);
    // console.log(background);
    const [day,setDay]=useState(false);

     const handleDay= ()=>{
        setDay(true);
        setBackground({backgroundColor:'rgb(255,250,253)',color:'black'});
     }

     const handleNight= ()=>{
        setDay(false);
        setBackground({backgroundColor:'rgb(0,0,0)',color:'white'});
     }  

 

    return (
        <div className='navber'>
            <div className="navSec1"> 
            <div className="navSecUp">

                <div className="sideText">
                    <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/359804288_243659565121674_4993480980418521073_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQ-qPmD_4wK8LmdeAiHiwi2Wgv0DhiO37ZaC_QOGI7fgm005roxfKWYEgiFxzFdKvFMu9VAhKgBa5bHlcNqbNf&_nc_ohc=ws-_h6oZS6EAX_9RpDO&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBfT5zpAAYuI5zIE1SwcWbbtjoO2nY7vWqUCUbFN5Mbyg&oe=64BCC45E" alt="" />
                    <div className="slideHd">
                    <h5>Abu Sayed</h5>
                    <h5><Typed
                         strings={['Web Developer','Front-End Developr','Web Desiner']}
                         typeSpeed={150}
                         backSpeed={100}
                         loop
                         /></h5>
                    </div>
                </div>
                <div className="backGround">
                   { day ===true ?<button onClick={handleNight} className="nightBtn"><FontAwesomeIcon icon={faMoon} /></button>  :
                      <button onClick={handleDay} className=" dayBtn"><FontAwesomeIcon icon={faSun} /></button>
                    }
                </div>
            </div>
                <div className="navSecDwn">
                <div className="link">
                    <Link className='navLink'  to={'/home'} >
                        <FontAwesomeIcon icon={faHome} />
                        <br />
                        <span>Home</span>
                        
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/about'} >
                        <FontAwesomeIcon icon={faUser} />
                        <br />
                        <span>About</span>
                        
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/resume'} >
                        <FontAwesomeIcon icon={faListAlt} />
                        <br />
                        <span>Resume</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/work'} >
                        <FontAwesomeIcon icon={faEye} />
                        <br />
                        <span>Work</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/blog'} >
                        <FontAwesomeIcon icon={faPodcast} />
                        <br />
                        <span>Blogs</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/contact'} >
                        <FontAwesomeIcon icon={faPhone} />
                        <br />
                        <span>Contact</span>
                    </Link>
                </div>
                <div className="link">
                    <Link className='navLink' to={'/product'} >
                        <FontAwesomeIcon icon={faCode} />
                        <br />
                        <span>Product</span>
                    </Link>
                </div>
                </div>
            </div>
            <div className="navSec2" style={background}>
                     <div className="backImg">
                       
                     </div>
                     <div className="navSec2Txt" style={background}>
                        <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/359804288_243659565121674_4993480980418521073_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQ-qPmD_4wK8LmdeAiHiwi2Wgv0DhiO37ZaC_QOGI7fgm005roxfKWYEgiFxzFdKvFMu9VAhKgBa5bHlcNqbNf&_nc_ohc=ws-_h6oZS6EAX_9RpDO&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBfT5zpAAYuI5zIE1SwcWbbtjoO2nY7vWqUCUbFN5Mbyg&oe=64BCC45E" alt="" />
                        <h1>Abu Sayed</h1>
                        {/*   Text Changer */}
                        <h3>Iam a <Typed
                         strings={['Web Developer','Web Desiner','Front-Endd Developr']}
                         typeSpeed={150}
                         backSpeed={100}
                         loop
                         /></h3>
                         <div className="socialIcn" style={background}>
                             <Link href="" style={background} className="sclLnk"><FontAwesomeIcon icon={faFacebook} /> </Link>
                             <Link href="" style={background} className="sclLnk"><FontAwesomeIcon icon={faTwitter} /> </Link>
                             <Link href="" style={background} className="sclLnk"><FontAwesomeIcon icon={faInstagramSquare} /></Link>
                             <Link href="" style={background} className="sclLnk"><FontAwesomeIcon icon={faLinkedin} /></Link>
                             <Link href="" style={background} className="sclLnk"><FontAwesomeIcon icon={faWhatsappSquare} /></Link>
                         </div>
                         <div className="navBtn">
                            <button style={background} className="contactBtn">Download CV &nbsp;  <FontAwesomeIcon icon={faCloudDownload} /></button>
                            <button style={background} className="cvBtn">Contact Me &nbsp;  <FontAwesomeIcon icon={faTelegram} /></button>
                         </div>
                     </div>
             </div>
        </div>
    );
};

export default Navber;