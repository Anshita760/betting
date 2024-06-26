import React, { useState } from 'react'
import '../CSS/home.css'
import { NavLink } from 'react-router-dom'
import Menu from '../Component/Menu'
import LoginForm from '../Component/LoginForm'
import SignupForm from '../Component/SignupForm'

const Home = (props) => {
    const [loginOpen, setlogin] = useState(true)
    const [signupOpen, setsignup] = useState(true)
    const [status, setStatus] = useState('')

    setTimeout(()=>{
        setStatus(false)
    }, 3000)
  return (
    <>
        <div className='home-page'>
            <div className="home-bg">
                <div className="home-navbar">
                    <Menu/>
                    <div className="login-signup">
                        <button className='login-signup-btn' onClick={()=>(setlogin(false))}>Login</button>
                        <button className='login-signup-btn' onClick={()=>(setsignup(false))}>Signup</button>
                    </div>
                </div>
                {status ? <p className='red-alert'>{status}</p> : " "}
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
                <p className='download-p'>Welcome to Co Chat 9.COM</p>
                <a href='#' className='download-btn'>
                    <img src="https://staging.cloud1.me/betting/assets/images/andoid-app.png" alt="" />
                    <div className="btn-instruct">
                        <h4>DOWNLOAD ANDROID APP</h4>
                        <span>Click here to download</span>
                    </div>
                </a>
                <LoginForm 
                    loginOpen = {loginOpen} 
                    setlogin = {setlogin} 
                    setStatus = {setStatus} 
                    verifyWindow = {props.verifyWindow} 
                    openVerifyWindow = {props.openVerifyWindow} 
                />
                <SignupForm 
                    signupOpen = {signupOpen} 
                    setsignup = {setsignup} 
                    setStatus = {setStatus} 
                    verifyWindow = {props.verifyWindow} 
                    openVerifyWindow = {props.openVerifyWindow} 
                />
            </div>
        </div>
    </>
  )
}

export default Home
