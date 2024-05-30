import React, { useState } from 'react'
import '../CSS/withdraw.css'
import BackLogout from '../Component/BackLogout'
import VerifyOTP from '../Component/VerifyOTP'

const Withdraw = () => {
    const [addnew, openAddnew] = useState("open-addnew")
    const [otp, openOtp] = useState(true)
  return (
    <>
        <div className="withdraw-section">
            <BackLogout/>
            <div className="withdraw-heading">
                <h2>WITHDRAW</h2>
            </div>
            <div className="withdraw-content">
                <p>Fill the details below to initiate widrawal</p>
                <form className='withdraw-form'>
                    <div className="with-label-select">
                        <label htmlFor="">Select sitename</label>
                        <select name="" className='select-option' id="">
                          <option value="">Select</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 1">Option 2</option>
                          <option value="Option 1">Option 3</option>
                          <option value="Option 1">Option 4</option>
                        </select>
                    </div>
                    <div className="with-label-select">
                        <label htmlFor="">Select username</label>
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
                        <input type="number" className='amount-input'/>
                    </div>
                    <input type="submit" className='withdraw-submit-btn' value="Withdraw"/>
                </form>
                {otp ? (
                    <form className="addnew-account-form" id={addnew}>
                    <h3>Add new account</h3>
                    <div className="close-btn" onClick={()=>{openAddnew("open-addnew")}}>
                        <span class="material-symbols-outlined">close</span>
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
                    <input type="submit" onClick={()=>{openOtp(false)}} className='add-account-btn' value="Add account"/>
                    </form>
                ):(
                    <VerifyOTP openOtp = {openOtp}/>
                )}
            </div>
        </div>
    </>
  )
}

export default Withdraw
