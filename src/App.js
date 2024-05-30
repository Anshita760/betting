import './App.css';
import Home from './pages/Home';
import Forgot from './pages/Forgot';
import { Route, Routes } from 'react-router';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import VerifyOTP from './Component/VerifyOTP';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Forget' element={<Forgot/>}/>
        <Route path='/Deposit' element={<Deposit/>}/>
        <Route path='/Withdraw' element={<Withdraw/>}/>
        <Route path='/VerifyOTP' element={<VerifyOTP/>}/>
      </Routes>
    </div>
  );
}

export default App;
