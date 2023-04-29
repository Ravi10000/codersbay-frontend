import React from 'react'
import './QRCode.css';
import QRCodeImg from './QRCode.png';
const QRCode = () => {
    return (
        <div className='QRMain'>
            <form className='contactForm'>
                <div className='formHeading'>
                    <p className='formTextHeading'>Scan QR Code to Pay</p>
                </div>
                <img className='QRCodeImg' src={QRCodeImg} alt="" />
                <div className='QRHeading2'>
                    <p className='QRheading2Text'>Or Pay using bank</p>
                </div>
                <div className='QRfields'>
                    <div className='QRfield'>
                        <p className='QRfieldTextOne'>ACCOUNT NAME</p>
                        <p className='QRfieldTextTwo'>MANTARAV PRIVATE LIMITED</p>
                    </div>
                    <div className='QRfield'>
                        <p className='QRfieldTextOne'>ACCOUNT NO.</p>
                        <p className='QRfieldTextTwo'>789456123582</p>
                    </div>
                    <div className='QRfield'>
                        <p className='QRfieldTextOne'>SWIFT CODE</p>
                        <p className='QRfieldTextTwo'>SADA56ASDF98DF4</p>
                    </div>
                    <div className='QRfield'>
                        <p className='QRfieldTextOne'>BRANCH NAME</p>
                        <p className='QRfieldTextTwo'>Nirvana Country Yard</p>
                    </div>
                    <div className='QRlabel'>
                        <div className='QRLabelOne'>
                            <p className='QRLabelOneText'>Transaction Id</p>
                        </div>
                        <div className='QRLabelTwo'>
                            <p className='QRLabelTwoText'>Enter Transaction Id</p>

                        </div>
                    </div>
                </div>
                <button className='QRSubmit'><p className='QRSubmitText'>Submit</p></button>
            </form>
        </div>
    )
}

export default QRCode