import { React, useState, useEffe } from 'react'
import VerifyOTP from '../Component/VerifyOTP'
import "../CSS/signupForm.css"

const SignupForm = ({signupOpen, setsignup, setStatus, Snumber, Spass, setSnumber, setSpass}) => {
    const [Sname, setSname] = useState('')
    const [Sc_pass, setSc_pass] = useState('')
    const [error, setError] = useState('')
    const [signupVerify, setSignupVerify] = useState('')
    
    function SignupStatus() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
            
        const raw = JSON.stringify({
          "full_name": Sname,
          "phone_number": Snumber,
          "password": Spass,
          "device_type": "Web",
          "device_token": "",
          "device_id": ""
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://54.187.117.89/cochat9_cloud1/api/signup", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result.status == 200){
                    setStatus(result.message)
                    setSignupVerify(true)
                    localStorage.setItem("data", raw)
                }
                else if (result.status == 500){
                    setStatus(result.message)
                }
                else if (result.status == 502){
                    setStatus(result.message)
                }
            })
            .catch((error) => setError(error));
    }
    function handleSignup(){
        if(Spass === Sc_pass){
            setSpass(Spass)
            SignupStatus()
        }
        else{
            alert('password did not MATCH !!')
        }
    }
  return (
    <>
        {signupVerify ? (
            <div className='signup-verify'>
                <VerifyOTP Snumber = {Snumber} setStatus = {setStatus} setsignup = {setsignup} setSignupVerify = {setSignupVerify} />
            </div>
        ) : (
            <div className={signupOpen ? "signup-section" : "signup-section-open"} onSubmit={handleSignup}>
                <div className="cross" onClick={()=>(setsignup(true))}>
                    <span className="material-symbols-outlined">close</span>
                </div>
                <img src="https://staging.cloud1.me/betting/assets/images/CO-Chatdark.png" alt="" />
                <span className='login-signup-heading'>Registration</span>
                <form className='login-signup-form'>
                    <div className='num-pass'>
                        <label>
                            <span className="material-symbols-outlined user">person</span>
                        </label>
                        <input type="text" placeholder='Please enter full name' onChange={(e)=>{setSname(e.target.value)}}/>
                    </div>
                    <div className='num-pass'>
                        <label>+91</label>
                        <input type="number" placeholder='Please enter 10-digit mobile number' onChange={(e)=>{setSnumber(e.target.value)}}/>
                    </div>
                    <div className="num-pass">
                        <label>
                            <span className="material-symbols-outlined lock">lock</span>
                        </label>
                        <input type="password" placeholder='Please enter password' onChange={(e)=>{setSpass(e.target.value)}}/>                            
                    </div>
                    <div className="num-pass">
                        <label>
                            <span className="material-symbols-outlined lock">lock</span>
                        </label>
                        <input type="password" placeholder='Please enter confirm password' onChange={(e)=>{setSc_pass(e.target.value)}}/>                            
                    </div>
                    <button type="button" className='login-register-btn' onClick={()=> handleSignup()}>Register</button>
                </form>
            </div>
        )}
    </>
  )
}

export default SignupForm
