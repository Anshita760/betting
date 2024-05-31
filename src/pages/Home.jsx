import React, { useState } from 'react'
import '../CSS/home.css'
import { NavLink } from 'react-router-dom'
import Menu from '../Component/Menu'

const Home = () => {
    const [loginOpen, setlogin] = useState(true)
    const [signupOpen, setsignup] = useState(true)
  return (
    <>
        <div className='home-page'>
            <div className="home-bg">
                <div className="navbar">
                    <Menu/>
                    <div className="login-signup">
                        <button className='login-signup-btn' onClick={()=>(setlogin(false))}>Login</button>
                        <button className='login-signup-btn' onClick={()=>(setsignup(false))}>Signup</button>
                    </div>
                </div>
                <NavLink className="logo">
                    <img src="https://staging.cloud1.me/betting/assets/images/CO-Chat.png2.png" alt="" />
                </NavLink>
                <div className="deposit-withdraw">
                    <NavLink to="/Deposit" className='depo-with-btn deposit-btn'>
                        <img src="assets/move_item.png" alt="" />
                        DEPOSIT
                    </NavLink>
                    <NavLink to="/Withdraw" className='depo-with-btn withdraw-btn'>
                        WITHDRAW 
                        <img src="assets/move_item.png" alt="" />
                    </NavLink>
                </div>
            </div> 
            <div className="download">
                <p>Welcome to Co Chat 9.COM</p>
                <a href='#' className='download-btn'>
                    <img src="https://staging.cloud1.me/betting/assets/images/andoid-app.png" alt="" />
                    <div className="btn-instruct">
                        <h4>DOWNLOAD ANDROID APP</h4>
                        <span>Click here to download</span>
                    </div>
                </a>
                <div className={loginOpen ? "login-section" : "login-section-open"}>
                    <div className="cross" onClick={()=>(setlogin(true))}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                    <img src="https://staging.cloud1.me/betting/assets/images/CO-Chatdark.png" alt="" />
                    <span className='login-signup-heading'>Login With Mobile Number</span>
                    <form className='login-signup-form'>
                        <div className='num-pass'>
                            <label htmlFor="">+91</label>
                            <input type="text" placeholder='Please enter 10-digit mobile number'/>
                        </div>
                        <div className="num-pass">
                            <label htmlFor="">
                                <span className="material-symbols-outlined lock">lock</span>
                            </label>
                            <input type="password" placeholder='Please enter password'/>                            
                        </div>
                        <input type="button" className='login-register-btn' value="Login" />
                        <NavLink to="/Forget" className='forget-pass-btn'>Forgot password?</NavLink>
                    </form>
                </div>
                <div className={signupOpen ? "signup-section" : "signup-section-open"}>
                    <div className="cross" onClick={()=>(setsignup(true))}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                    <img src="https://staging.cloud1.me/betting/assets/images/CO-Chatdark.png" alt="" />
                    <span className='login-signup-heading'>Registration</span>
                    <form className='login-signup-form'>
                        <div className='num-pass'>
                            <label htmlFor="">
                                <span class="material-symbols-outlined user">person</span>                            </label>
                            <input type="text" placeholder='Please enter full name'/>
                        </div>
                        <div className='num-pass'>
                            <label htmlFor="">+91</label>
                            <input type="text" placeholder='Please enter 10-digit mobile number'/>
                        </div>
                        <div className="num-pass">
                            <label htmlFor="">
                                <span className="material-symbols-outlined lock">lock</span>
                            </label>
                            <input type="password" placeholder='Please enter password'/>                            
                        </div>
                        <div className="num-pass">
                            <label htmlFor="">
                                <span className="material-symbols-outlined lock">lock</span>
                            </label>
                            <input type="password" placeholder='Please enter confirm password'/>                            
                        </div>
                        <input type="button" className='login-register-btn' value="Register" />
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
