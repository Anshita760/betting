import React from 'react'
import '../CSS/withdrawHistory.css'
import BackLogout from '../Component/BackLogout'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const WithdrawHistory = () => {
  return (
    <>
      <div className="withdrawHistory-section">
            <BackLogout/>
            <div className="withdrawHistory-heading">
                <h1>WITHDRAWAL HISTORY</h1>
            </div>
            <div className='withdraw-table-section'>
                <div className="withdraw-table-panel">
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
                    <DateRangePicker className='date-picker-comp'placeholder="05-25-2024 - 06-15-2024"/>
                    <select name="" id="" className='select-option'>
                        <option value="By Username">By Status</option>
                        <option value="Test 123">Pending</option>
                        <option value="Test 123">Rejected</option>
                        <option value="Test 123">Success</option>
                    </select>
                    <select name="" id="" className='select-option'>
                        <option value="By Username">By Sitename</option>
                        <option value="Test 123">Test 123</option>
                        <option value="Test 234">Test 234</option>
                        <option value="Test 345">Test 345</option>
                    </select>
                  </div>
                </div>
                <div className='withdraw-table-content'>
                    <div className="withdraw-table-custom">
                      <Table striped>
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>Date</th>
                            <th>Sitename</th>
                            <th>Username</th>
                            <th>Account number</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>10/10/2024</td>
                            <td>Sitename here</td>
                            <td>Test123</td>
                            <td>9990009990009900</td>
                            <td>100000</td>
                            <td>Success</td>
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

export default WithdrawHistory
