import React from 'react'
import './MainUI.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CoderBay from './coderbay.png';
import searchBar from './searchBar.png';
const MainUI = () => {
    return (
        <div className='mainUI'>
            <div className='mainHeader diflex'>
                <div className='firstMainH'>
                    <img className='' src={CoderBay} alt='logo' />
                    <select name="cars" id="cars">
                        <option value="volvo">Services</option>
                        <option value="saab">Services</option>
                        <option value="opel">Services</option>
                        <option value="audi">Services</option>
                    </select>
                    <a className='mainUIaboutus'>About Us</a>
                </div>
                <div className='secondMainH'>
                    <button className='getButton'><p className='getText'>get a quote</p></button>
                </div>
            </div>
            <div className='mainBody'>
                <div className='mainLeftContent'>
                    <p className='mainTextOne'>Helping businesses transform Digitally</p>
                    <p className='mainTextTwo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <form action="">
                        <form className='mainSeacrhBar'>
                            <input type='text' placeholder='Search Here' className='mainSearchText' />
                            <div className='seacrhImgBack'>
                                <img src={searchBar} alt="" />
                            </div>
                        </form>
                    </form>

                </div>
                <div className='mainRightImage'>
                    <img src="" alt="" />
                </div>
            </div>
            <p className='mainNav'>Our Service Offerings</p>
        </div>
    )
}

export default MainUI