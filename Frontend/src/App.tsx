import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { format } from 'path'; 

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<LogIn/>}/>
          <Route path='signup' element={<SignUp/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
