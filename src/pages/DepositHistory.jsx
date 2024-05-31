import React from 'react'
import '../CSS/depositHistory.css'
import BackLogout from '../Component/BackLogout'
import { DateRangePicker, Stack } from 'rsuite';

const DepositHistory = () => {
  return (
    <>
        <div className="depositHistory-section">
            <BackLogout/>
            <div className="deposit-heading">
                <h1>DEPOSIT HISTORY</h1>
            </div>
            <div className="table-panel">
                <div className="filter">
                    <span class="material-symbols-outlined">filter_alt</span>
                    <p>Filters</p>
                </div>
                <div className="user-filling-select">
                    <select name="" id="">
                        <option value="By Username">By Username</option>
                        <option value="Test 123">Test 123</option>
                        <option value="Test 123">Test 123</option>
                        <option value="Test 123">Test 123</option>
                    </select>
                    <Stack>
                    <DateRangePicker/>
                    </Stack>
                    {/* <input type="date" min="5/25/2024" max="6/15/2024"/> */}
                    <select name="" id="">
                        <option value="By Username">By Status</option>
                        <option value="Test 123">Pending</option>
                        <option value="Test 123">Rejected</option>
                        <option value="Test 123">Success</option>
                    </select>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default DepositHistory