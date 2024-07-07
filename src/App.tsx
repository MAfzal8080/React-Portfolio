import Login from './Login';
import Home from './Home'
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Query from './Query';
import React from 'react';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/query' element={<Query />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
