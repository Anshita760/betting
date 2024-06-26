import React, { useState } from 'react'
import '../CSS/forgot.css'
import BackLogout from '../Component/BackLogout'
import { NavLink } from 'react-router-dom'
import VerifyOTP from '../Component/VerifyOTP'

const Forgot = ({verifyWindow, openVerifyWindow}) => {
  return (
    <>
        <div className="reset-pass-section">
            <BackLogout/>
            <div className="reset-heading">
                <h2>Reset password</h2>
            </div>
            <div className="reset-content">
                <p>Please enter your registered phone number</p>
                <form className='reset-form'>
                    <div className="phone-input">
                        <label htmlFor="">Phone number</label>
                        <input type="number" placeholder=''/>
                    </div>
                    <button type="button" onClick={()=>openVerifyWindow(true)} className='otp-btn' >Request OTP</button>
                    <div className={verifyWindow ? "openVerify-window-active" : "openVerify-window"} >
                        <VerifyOTP openVerifyWindow={openVerifyWindow}/>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Forgot
