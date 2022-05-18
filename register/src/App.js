import { Login } from './components/login/login';
import { Register } from './components/login/register';
import React from "react";
import './App.scss';

function App() {
  return(
    <div className='App'>
      <div className='login'>
        <div className='container'>
          <Register/>
        </div>
      </div>
      <div className='login'>
        <div className='container'>
          <Login/>
        </div>
      </div>
    </div> 
  )
}
export default App;
