import React, { useState } from 'react'
import '../CSS/withdraw.css'
import BackLogout from '../Component/BackLogout'
import VerifyOTP from '../Component/VerifyOTP'

const Withdraw = ({verifyWindow, openVerifyWindow, setStatus}) => {
    const [addnew, openAddnew] = useState("open-addnew")
    
  return (
    <>
        <div className="withdraw-section">
            <BackLogout setStatus = {setStatus}/>
            <div className="withdraw-heading">
                <h2>WITHDRAW</h2>
            </div>
            <div className="withdraw-content">
                <p>Fill the details below to initiate withdrawal</p>
                <form className='withdraw-form'>
                    <div className="with-label-select">
                        <label htmlFor="">Select Sitename</label>
                        <select name="" className='select-option' id="">
                          <option value="">Select</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 1">Option 2</option>
                          <option value="Option 1">Option 3</option>
                          <option value="Option 1">Option 4</option>
                        </select>
                    </div>
                    <div className="with-label-select">
                        <label htmlFor="">Select Username</label>
                        <select name="" className='select-option' id="">
                          <option value="">Select</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 1">Option 2</option>
                          <option value="Option 1">Option 3</option>
                          <option value="Option 1">Option 4</option>
                        </select>
                    </div>
                    <div className="with-label-select">
                        <label htmlFor="" className='addnew-label'>
                            <span>Account number</span>
                            <span className='add-new-span' onClick={()=>{openAddnew(" ")}}>+ Add new</span>
                        </label>
                        <select name="" className='select-option' id="">
                          <option value="">Select</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 1">Option 2</option>
                          <option value="Option 1">Option 3</option>
                          <option value="Option 1">Option 4</option>
                        </select>
                    </div>
                    <div className="with-label-select">
                        <label htmlFor="">Amount</label>
                        <input type="number"/>
                    </div>
                    <button type="submit" className='withdraw-submit-btn' >Withdraw</button>
                </form>
                {verifyWindow ? (
                    <VerifyOTP openVerifyWindow={openVerifyWindow}/>
                ):(
                    <form className="addnew-account-form" id={addnew}>
                        <h3>Add new account</h3>
                        <div className="close-btn" onClick={()=>{openAddnew("open-addnew")}}>
                            <span className="material-symbols-outlined">close</span>
                        </div>
                        <div className='addnew-label-input'>
                            <label htmlFor="">Account name</label>
                            <input type="text" />
                        </div>
                        <div className='addnew-label-input'>
                            <label htmlFor="">Bank name</label>
                            <input type="text" />
                        </div>
                        <div className='addnew-label-input'>
                            <label htmlFor="">IFSC code</label>
                            <input type="text" />
                        </div>
                        <div className='addnew-label-input'>
                            <label htmlFor="">Account number</label>
                            <input type="number" />
                        </div>
                        <button type="submit" onClick={()=>openVerifyWindow(true)} className='add-account-btn' >Add account</button>
                    </form>
                )}
            </div>
        </div>
    </>
  )
}

export default Withdraw
