import React from 'react'
import "../CSS/editProfile.css"
import { NavLink } from 'react-router-dom'
import Menu from '../Component/Menu'

const EditProfile = () => {
  return (
    <>
        <div className="editProfile-section">
          <div className='editProfile-nav'>
            <Menu/>
            <NavLink to='/' className='edit-logout-btn'>Logout</NavLink>
          </div>
          <div className="editProfile-heading">
            <h1>Personal Details</h1>
          </div>
          <div className="editProfile-content">
            <div className="edit-form">
              <form className='update-profile'>
                <div className="edit-label-input">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Chitra Garg'/>
                </div>
                <input type="button" className='update-btn' value="Update"/>
              </form>
              <h3>Change password</h3>
              <form className='update-profile'>
                <div className="edit-label-input">
                  <label htmlFor="">New Password</label>
                  <input type="password" />
                </div>
                <div className="edit-label-input">
                  <label htmlFor="">Confirm new Password</label>
                  <input type="password" />
                </div>
                <input type="button" className='update-btn' value="Change Password"/>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default EditProfile
