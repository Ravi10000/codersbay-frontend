import React from 'react'
import './Navbar.css';
import LogoName from './LogoName.png';
import live from './live.png';
import mail from './mail.png';
import Phone from './phone.png';
const Navbar = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='secOne'>
                    <img src={LogoName} alt="" />
                    <div className='data'>
                        <div className='phone'>
                            <div className='IconButton'>
                                <img src={Phone} alt="" />
                            </div>
                            <div className='Texts'>
                                <p className='descTextOne'>Phone</p>
                                <p className='descTextTwo'>+1234567891</p>
                            </div>

                        </div>
                        <div className='phone'>
                            <div className='IconButton'>
                                <img src={mail} alt="" />
                            </div>
                            <div className='Texts'>
                                <p className='descTextOne'>Mail</p>
                                <p className='descTextTwo'>info@codersbay.com</p>
                            </div>

                        </div>
                        <div className='phone'>
                            <div className='IconButton'>
                                <img src={live} alt="" />
                            </div>
                            <div className='Texts'>
                                <p className='descTextOne'>Address</p>
                                <p className='descTextTwo'>N234 Johar Town, Lahore</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='sec'>
                    <div className='navMainHeading'>
                        <p className='navHeading'>Our Services</p>
                    </div>
                    <ul className='navUls'>
                        <li >E-commerce</li>
                        <li >Professional Service</li>
                        <li >ERP and CRM</li>
                        <li >Cloud Computing</li>
                        <li >IT Infrastructure</li>
                        <li >Marketplace / SAAS</li>
                        <li >Digital Marketing</li>
                    </ul>
                </div>
                <div className='sec'>
                    <div className='navMainHeading'>
                        <p className='navHeading'>Links</p>
                    </div>
                    <ul className='navUls'>
                        <li >Careers</li>
                        <li >Blogs</li>
                        <li >Privacy Policy</li>
                        <li >Sitemap</li>
                    </ul>
                </div>
                <div className='sec'>
                    <div className='navMainHeading'>
                        <p className='navHeading'>Connect with us</p>
                    </div>
                    <div className='social'>
                        <div className='socialDiv'>
                            <img src={live} alt="" />
                        </div>
                        <div className='socialDiv'>
                            <img src={live} alt="" />
                        </div>
                        <div className='socialDiv'>
                            <img src={live} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'></div>
        </div>
    )
}

export default Navbar