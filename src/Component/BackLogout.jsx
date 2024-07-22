import React from 'react'
import "../CSS/backLogout.css"
import Menu from './Menu'
import { NavLink } from 'react-router-dom'

const BackLogout = ({setStatus}) => {
  const getLoginSessionKey = JSON.parse(localStorage.getItem("login_session_key"))
  function handleLogout(){
    console.log(getLoginSessionKey.login_session_key)
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getLoginSessionKey.login_session_key);
    myHeaders.append("Cookie", "ci_session=v6e8d2c6cmp1ng5cqgkeqg2e9050oemb");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://54.187.117.89/cochat9_cloud1/api/login/logout", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status == 200){
          setStatus(result.message)
        }
        else if(result.status == 500){
          setStatus(result.message)
        }
      })
      .catch((error) => console.error(error));
  }
  return (
    <>
       <div className="forgot-nav">
            <Menu/>
            <div className="back-logout">
                <NavLink to='/' className='back-logout-btn'>
                    <span className="material-symbols-outlined back-arrow">arrow_left_alt</span>
                    Back
                </NavLink>
                <NavLink className='back-logout-btn' onClick={()=> handleLogout()}>Logout</NavLink>
            </div>
        </div>
    </>
  )
}

export default BackLogout
