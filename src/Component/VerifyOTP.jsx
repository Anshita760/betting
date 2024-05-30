import React from 'react'
import '../CSS/verifyOtp.css'

const VerifyOTP = (props) => {
  return (
    <>
        <div className="verifyOtp-comp">
            <div className="otp-back-arrow" onClick={()=>{props.openOtp(true)}}>
                <span className="material-symbols-outlined">arrow_back_ios</span>
            </div>
            <form className='otp-form'>
                <h2>Enter OTP</h2>
                <div className="otp-input">
                    <input type="number" />
                    <input type="number" />
                    <input type="number" />
                    <input type="number" />
                    <input type="number" />
                    <input type="number" />
                </div>
                <input type="submit" className='verifyOtp-btn' value="Verify code"/>
            </form>
        </div>
    </>
  )
}

export default VerifyOTP