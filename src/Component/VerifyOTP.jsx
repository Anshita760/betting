import React, { useState, useRef } from 'react'
import '../CSS/verifyOtp.css'

const VerifyOTP = ({openVerifyWindow}) => {
    const [otp, setOTP] = useState(['', '', '', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    const handleChange = (index, event) => {
        const { value } = event.target;
        const newOTP = [...otp];
        newOTP[index] = value;

        setOTP(newOTP);

        // Move focus to the next input field if value is entered
        if (value && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        // Move focus to the previous input field if backspace is pressed and the current field is empty
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleInput = (index, event) => {
        const { value } = event.target;
        const newInput = value.slice(0, 1); // Take only the first character
        event.target.value = newInput; // Update the input value
    };

  return (
    <>
        <div className="verifyOtp-comp">
            <div className="otp-back-arrow" onClick={()=>{openVerifyWindow(false)}}>
                <span className="material-symbols-outlined">arrow_back_ios</span>
            </div>
            <form className='otp-form'>
                <h2>Enter OTP</h2>
                <div className='otp-input'>
                    {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="number"
                        value={digit}
                        onChange={(event) => handleChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        onInput={(event) => handleInput(index, event)} // Handle input event
                        ref={inputRefs[index]}
                       
                    />
                    ))}
                </div>
                <input type="button" className='verifyOtp-btn' value="Verify code"/>
            </form>
        </div>
    </>
  )
}

export default VerifyOTP
