import React, { useState } from 'react'
import '../CSS/verifyOtp.css'
import Forgot from '../pages/Forgot'
import Withdraw from '../pages/Withdraw'

const VerifyOTP = ({openVerifyWindow}) => {
  return (
    <>
        <div className="verifyOtp-comp">
            <div className="otp-back-arrow" onClick={()=>{openVerifyWindow(false)}}>
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
                <input type="button" className='verifyOtp-btn' value="Verify code"/>
            </form>
        </div>
    </>
  )
}

export default VerifyOTP
