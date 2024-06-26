import React, { useState, useRef } from 'react'
import '../CSS/verifyOtp.css'

const VerifyOTP = ({openVerifyWindow, setStatus, Snumber, setsignup, setSignupVerify}) => {
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
    function getOTP(){
        let OTPresult = otp.join('');   // join('') is used to join all the values of the 
        // console.log(OTPresult)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ci_session=80j3844m2ova4e07s147hmfic1ibbahq");

        const raw = JSON.stringify({
          "phone_number": Snumber,
          "otp": OTPresult
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch("http://54.187.117.89/cochat9_cloud1/api/signup/verify", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result.status == 200){
                    // alert(result.message)
                    setStatus(result.message)
                    setSignupVerify(false)
                }
                else if(result.status == 500){
                    setStatus(result.message)
                }
                // console.log(result)
            })
          .catch((error) => console.error(error));
        // console.log(otp)
    }

    const handleKeyDown = (index, event) => {
        // Move focus to the previous input field if backspace is pressed and the current field is empty
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleInput = (event) => {
        const { value } = event.target;
        const newInput = value.slice(0, 1); // Take only the first character
        event.target.value = newInput; // Update the input value
    };

  return (
    <>
        <div className="verifyOtp-comp">
            <div className="otp-back-arrow" onClick={()=>{setSignupVerify(false)}}>
                <span className="material-symbols-outlined">arrow_back_ios</span>
            </div>
            <form className='otp-form' onSubmit={()=> getOTP()}>
                <h2>Enter OTP</h2>
                <div className='otp-input'>
                    {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="number"
                        value={digit}
                        onChange={(event) => handleChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        onInput={(event) => handleInput(event)} // Handle input event
                        ref={inputRefs[index]}
                    />
                    ))}
                </div>
                <button type="button" className='verifyOtp-btn' onClick={()=> {getOTP()}} >Verify code</button>
            </form>
        </div>
    </>
  )
}

export default VerifyOTP
