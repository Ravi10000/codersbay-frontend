import React from 'react'
import './Register.css';
import registerImg from './registerImage.png';
const Register = () => {
    return (
        <div className='register'>
            <div className='registerCenterDiv'>
                <div className='registerImg'>
                    <div className='registerText'>
                        <p className='registerHead1'> Let's talk about your project</p>
                        <p className='registerHead2'> Lets make your hunt easier</p>
                    </div>
                    <img className='registerActualImg' src={registerImg} alt="RegisterImage" />
                </div>
                <form className='regsiterForm'>
                    <form className='fields'>
                        <div className='f'>
                            <div className='field'>
                                <p className='lbl'>First Name</p>
                                <input type="text" placeholder='Enter first name' className='inputField' />
                            </div>
                            <div className='field'>
                                <p className='lbl'>Last Name</p>
                                <input type="text" placeholder='Enter last name' className='inputField' />
                            </div>
                        </div>
                        <div className='fieldTwo'>
                            <p className='lbl'>Phone Number</p>
                            <input type="text" placeholder='Enter phone number' className='inputFieldTwo' />
                        </div>
                        <div className='fieldTwo'>
                            <p className='lbl'>Enter Your Email</p>
                            <input type="text" placeholder='Enter email address' className='inputFieldTwo' />
                        </div>
                        <div className='fieldTwo'>
                            <p className='lbl'>Message</p>
                            <input type="text" placeholder='Message' className='inputFieldThree' />
                        </div>
                    </form>
                    <button className='getQuoteButton'><p className='getQuoteText'>Get Quote</p></button>
                </form>
            </div>
        </div>
    )
}

export default Register