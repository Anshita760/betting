import React from 'react'
import "../CSS/deposit.css"
import BackLogout from '../Component/BackLogout'

const Deposite = () => {
  return (
    <>
      <div className="deposit-section">
        <BackLogout/>
        <div className="bank-details">
          <div className="bank-detail">
            <button className="copied-btn">Copied!</button>
            <div className="detail-heading">
              <h5>Bank name</h5>
              <span className="material-symbols-outlined copy-icon">content_copy</span>
            </div>
            <p>SBI Bank</p>
          </div>
          <div className="bank-detail">
            <button className="copied-btn">Copied!</button>
            <div className="detail-heading">
              <h5>Account name</h5>
              <span className="material-symbols-outlined copy-icon">content_copy</span>
            </div>
            <p>ABC Enterprises</p>
          </div>
          <div className="bank-detail">
            <button className="copied-btn">Copied!</button>
            <div className="detail-heading">
              <h5>Account number</h5>
              <span className="material-symbols-outlined copy-icon">content_copy</span>
            </div>
            <p>99009900899009900</p>
          </div>
          <div className="bank-detail">
            <button className="copied-btn">Copied!</button>
            <div className="detail-heading">
              <h5>IFSC Code</h5>
              <span className="material-symbols-outlined copy-icon">content_copy</span>
            </div>
            <p>SBIN0000123</p>
          </div>
          <div className="bank-detail">
            <button className="copied-btn">Copied!</button>
            <div className="detail-heading">
              <h5>UPI Id</h5>
              <span className="material-symbols-outlined copy-icon">content_copy</span>
            </div>
            <p>91000000@ybl</p>
          </div>
        </div>
        <div className="deposit-content">
          <h2>DEPOSIT</h2>
          <form className="deposit-form">
            <div className="depo-label-input">
              <label htmlFor="">Select username</label>
              <select name="" className='select-option' id="">
                <option value="">Select</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
              </select>
            </div>
            <div className="depo-label-input">
              <label htmlFor="">Upload slip</label>
                <input type="file" className="input-file"/>
            </div>
            <div className="depo-label-input">
              <label htmlFor="">Amount</label>
              <input type="number" />
            </div>
            <input type="submit" value="Deposit" className='deposit-submit-btn'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Deposite