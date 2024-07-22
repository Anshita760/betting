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
import LoginForm from './Component/LoginForm';
import SignupForm from './Component/SignupForm';
import BackLogout from './Component/BackLogout';

function App() {
  const [verifyWindow, setVerifyWindow] = useState(false);
  const openVerifyWindow = (isOpen) => {
      setVerifyWindow(isOpen); // Update state using setter function
  };

  const [status, setStatus] = useState('')
    setTimeout(()=>{
        setStatus(false)
    }, 3000)
  return (
    <div className="App">
        {status ? <p className='red-alert'>{status}</p> : " "}

      <Routes>
        <Route path="/" exact element={<Home status = {status} setStatus = {setStatus}/>}/> 
        <Route path='/Home' element={<Home status = {status} setStatus = {setStatus}/>}/>
        <Route path='/LoginForm' element={<LoginForm verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow} status = {status} setStatus = {setStatus}/>}/>
        <Route path='/SignupForm' element={<SignupForm verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow} status = {status} setStatus = {setStatus}/>}/>
        <Route path='/Forget' element={<Forgot verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow}/>}/>
        <Route path='/Deposit' element={<Deposit/>}/>
        <Route path='/Withdraw' element={<Withdraw verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow} status = {status} setStatus = {setStatus}/>}/>
        <Route path='/DepositHistory' element={<DepositHistory/>}/>
        <Route path='/WithdrawHistory' element={<WithdrawHistory/>}/>
        <Route path='/VerifyOTP' element={<VerifyOTP verifyWindow = {verifyWindow} openVerifyWindow = {openVerifyWindow}/>}/>
        <Route path='/EditProfile' element={<EditProfile status = {status} setStatus = {setStatus}/>}/>
      </Routes>
    </div>
  );
}

export default App;
