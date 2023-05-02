import React from 'react'
import MainUI from '../components/MainUI/MainUI'
import CoderBay from '../components/MainUI/coderbay.png';
import searchBar from '../components/MainUI/searchBar.png';
import Register from '../components/RegisterImg/Register'
import Navbar from '../components/footer/footer'
import BlackLogo from './BlackLogo.png';
import './Styles.css';
import QRCode from '../components/QRCode/QRCode';

const Payment = () => {
    return (
        <div>
            <div className='mainUITwo'>
                <div className='mainHeader diflex whitebg '>
                    <div className='firstMainH'>
                        <img src={BlackLogo} alt='logo' />
                        {/* <select className='blackcolor select' name="cars" id="cars">
                            <option className='blackcolor' value="volvo">Services</option>
                            <option className='blackcolor' value="saab">Services</option>
                            <option className='blackcolor' value="opel">Services</option>
                            <option className='blackcolor' value="audi">Services</option>
                        </select> */}
                        {/* <a className='mainUIaboutus blackcolor'>About Us</a> */}
                    </div>
                    <div className='secondMainH'>
                        <button className='getButtonTwo '><p className='getText colorTe'>get a quote</p></button>
                    </div>
                </div>
                {/* <Register /> */}
                <QRCode />
                <Navbar />
            </div>
        </div>
    )
}

export default Payment