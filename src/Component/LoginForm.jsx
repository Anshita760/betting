import { React, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/loginForm.css"

const LoginForm = ({loginOpen, setlogin, setStatus}) => {
    const [Lnumber, setLnumber] = useState()
    const [Lpass, setLpass] = useState()

    function loginStatus(){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "phone_number": Lnumber,
            "password": Lpass,
            "device_type": "Web",
            "device_token": "test token",
            "device_id": "test device id"
        });
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("http://54.187.117.89/cochat9_cloud1/api/login", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if(result.status == 200){
                    setStatus(result.message)
                    localStorage.setItem("login_session_key", JSON.stringify(result.data))
                    setlogin(true)
                }
                else if(result.status == 500){
                    setStatus(result.message)
                }
            })
            .catch((error) => console.error(error));
    }
    function handleLogin(){
        loginStatus()
    }
  return (
    <>
        <div className={loginOpen ? "login-section" : "login-section-open"} onSubmit={handleLogin}>
            <div className="cross" onClick={()=>(setlogin(true))}>
                <span className="material-symbols-outlined">close</span>
            </div>
            <img src="https://staging.cloud1.me/betting/assets/images/CO-Chatdark.png" alt="" />
            <span className='login-signup-heading'>Login With Mobile Number</span>
            <form className='login-signup-form'>
                <div className='num-pass'>
                    <label>+91</label>
                    <input type="text" placeholder='Please enter 10-digit mobile number' onChange={(e)=> setLnumber(e.target.value)}/>
                </div>
                <div className="num-pass">
                    <label>
                        <span className="material-symbols-outlined lock">lock</span>
                    </label>
                    <input type="password" placeholder='Please enter password' onChange={(e)=> setLpass(e.target.value)}/>                            
                </div>
                <button type="button" className='login-register-btn' onClick={()=> handleLogin()}>Login</button>
                <NavLink to="/Forget" className='forget-pass-btn'>Forgot password?</NavLink>
            </form>
        </div>
    </>
  )
}

export default LoginForm
