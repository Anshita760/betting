import React from 'react'
import '../CSS/depositHistory.css'
import BackLogout from '../Component/BackLogout'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const DepositHistory = () => {
  return (
    <>
        <div className="depositHistory-section">
            <BackLogout/>
            <div className="deposit-heading">
                <h1>DEPOSIT HISTORY</h1>
            </div>
            <div className='deposit-table-section'>
              <div className="deposit-table-panel">
                <div className="filter">
                  <span className="material-symbols-outlined">filter_alt</span>
                  <p>Filters</p>
                </div>
                <div className="user-filling-select">
                  <select name="" id="" className='select-option'>
                    <option value="By Username">By Username</option>
                    <option value="Test 123">Test 123</option>
                    <option value="Test 123">Test 123</option>
                    <option value="Test 123">Test 123</option>
                  </select>
                  <DateRangePicker className='date-picker-comp' placeholder="05-25-2024 - 06-15-2024"/>
                  <select name="" id="" className='select-option'>
                    <option value="By Username">By Status</option>
                    <option value="Test 123">Pending</option>
                    <option value="Test 123">Rejected</option>
                    <option value="Test 123" className='green'>Success</option>
                  </select>
                </div>
              </div>
              <div className='deposit-table-content'>
                <div className="deposit-table-custom">
                  <Table striped>
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Username</th>
                        <th>Upload slip</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>10/10/2024</td>
                        <td>Test123</td>
                        <td>@Test123</td>
                        <td>1000</td>
                        <td className='green'>Success</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default DepositHistory