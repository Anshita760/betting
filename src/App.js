import './App.css';
import Home from './pages/Home';
import Forgot from './pages/Forgot';
import { Route, Routes } from 'react-router';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import DepositHistory from './pages/DepositHistory';
import WithdrawHistory from './pages/WithdrawHistory'
import VerifyOTP from './Component/VerifyOTP';
import EditProfile from './pages/EditProfile'
import { useState } from 'react';

function App() {
  const [verifyWindow, openVerifyWindow] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}/> 
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Forget' element={<Forgot verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow}/>}/>
        <Route path='/Deposit' element={<Deposit/>}/>
        <Route path='/Withdraw' element={<Withdraw verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow}/>}/>
        <Route path='/DepositHistory' element={<DepositHistory/>}/>
        <Route path='/WithdrawHistory' element={<WithdrawHistory/>}/>
        <Route path='/VerifyOTP' element={<VerifyOTP verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow}/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
