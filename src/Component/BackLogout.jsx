import React from 'react'
import "../CSS/backLogout.css"
import Menu from './Menu'
import { NavLink } from 'react-router-dom'

const BackLogout = () => {
  return (
    <>
       <div className="forgot-nav">
            <Menu/>
            <div className="back-logout">
                <NavLink to='/' className='back-logout-btn'>
                    <span class="material-symbols-outlined back-arrow">arrow_left_alt</span>
                    Back
                </NavLink>
                <NavLink to='/' className='back-logout-btn'>Logout</NavLink>
            </div>
        </div>
    </>
  )
}

export default BackLogout
