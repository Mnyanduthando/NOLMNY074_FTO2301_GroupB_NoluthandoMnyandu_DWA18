import {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import App from './Apps';

export default function Appp() {
  const navigate = useNavigate();


  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Home</button>


        <Routes>
          
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </div>
  );
}
