import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/menu.css'

const Menu = () => {
    const user = "Anshita"

    const [menu, openMenu] = useState(true)
  return (
    <>
        <div className="menu" onClick={()=>(openMenu(false))}>
            <span className="material-symbols-outlined">apps</span>
        </div>
        <div className={menu ? "menu-section" : "close-menu-btn"} >
            <div className="menu-top">
                <div className="close-menu">
                    <span className="material-symbols-outlined" onClick={()=>(openMenu(true))}>close</span>
                </div>
                <p>Welcome, {user}</p>
                <div className="menu-links">
                    <NavLink to="/DepositHistory" className="link">
                        <span class="material-symbols-outlined depo">logout</span>
                        <span>Deposit history</span>
                    </NavLink>
                    <NavLink to='/WithdrawHistory' className="link">
                        <span class="material-symbols-outlined with">login</span>
                        <span>Withdrawal history</span>
                    </NavLink>
                    <NavLink to='/EditProfile' className="link">
                        <span class="material-symbols-outlined edit">person_edit</span>
                        <span>Edit profile</span>
                    </NavLink>
                    <NavLink className="link">
                        <span class="material-symbols-outlined help">help</span>
                        <span>Help</span>
                    </NavLink>
                </div>
            </div>
            <div className="logout">
                <button className='logout-btn'>
                    <span class="material-symbols-outlined">power_settings_new</span>
                    Logout
                </button>
            </div>
        </div>
    </>
  )
}

export default Menu
