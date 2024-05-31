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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}/> 
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Forget' element={<Forgot/>}/>
        <Route path='/Deposit' element={<Deposit/>}/>
        <Route path='/Withdraw' element={<Withdraw/>}/>
        <Route path='/DepositHistory' element={<DepositHistory/>}/>
        <Route path='/WithdrawHistory' element={<WithdrawHistory/>}/>
        <Route path='/VerifyOTP' element={<VerifyOTP/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
