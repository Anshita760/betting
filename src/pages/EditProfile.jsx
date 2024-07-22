import { React, useState } from 'react'
import "../CSS/editProfile.css"
import { NavLink } from 'react-router-dom'
import Menu from '../Component/Menu'

const EditProfile = ({status, setStatus}) => {
  const [Updname, setUpdname] = useState('');
  const [Crntpass, setCrntpass] = useState('')
  const [Npass, setNpass] = useState('')
  const getLoginSessionKey = JSON.parse(localStorage.getItem("login_session_key"))
  // console.log(getLoginSessionKey.login_session_key)

  // CHANGE PASSWORD
  function getPass(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getLoginSessionKey.login_session_key);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ci_session=tbsm9gaqvbbpontvihad7139r72gfqc1");

    const raw = JSON.stringify({
      "current_password": Crntpass,
      "new_password": Npass
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://54.187.117.89/cochat9_cloud1/api/user/change_password", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status == 200){
          setStatus(result.message)
        }
        else if(result.status == 500){
          setStatus(result.message)
        }
        else if(result.status == 502){
          setStatus(result.message)
        }
      })
      .catch((error) => console.error(error));
  }

  // UPDATE PROFILE
  function handleUpdateProfile(){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getLoginSessionKey.login_session_key);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ci_session=8uqqukmaq6u9tgm3cet51na8trpl74pu");

    const raw = JSON.stringify({
      "full_name": Updname
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    console.log(Updname)
    fetch("http://54.187.117.89/cochat9_cloud1/api/user/update_profile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
          if(result.status == 200){
            setStatus(result.message)
          }
          else if(result.status == 500){
            setStatus(result.message)
          }
          else if(result.status == 502){
            setStatus(result.message)
          }
      })
      .catch((error) => console.error(error));
  }

  // LOGOUT 
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
        <div className="editProfile-section">
          <div className='editProfile-nav'>
            <Menu/>
            <NavLink className='edit-logout-btn' onClick={()=> handleLogout()}>Logout</NavLink>
          </div>
          <div className="editProfile-heading">
            <h1>Personal Details</h1>
          </div>
          <div className="editProfile-content">
            <div className="edit-form">
              <form className='update-profile'>
                <div className="edit-label-input">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Update name' onChange={(e)=>{setUpdname(e.target.value)}}/>
                </div>
                <input type="button" className='update-btn' value="Update" onClick={()=> handleUpdateProfile()}/>
              </form>
              <h3>Change password</h3>
              <form className='update-profile' onSubmit={()=> getPass()}>
                <div className="edit-label-input">
                  <label htmlFor="">Current Password</label>
                  <input type="password" onChange={(e)=> setCrntpass(e.target.value)}/>
                </div>
                <div className="edit-label-input">
                  <label htmlFor="">New Password</label>
                  <input type="password" onChange={(e)=> setNpass(e.target.value)}/>
                </div>
                <button type="button" className='update-btn' onClick={()=> getPass()}>Change Password</button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default EditProfile
