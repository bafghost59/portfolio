// import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import  DockDemo  from './components/DockDemo'




function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route>
    <Route path="/" element={<HomePage/>}/>
      </Route>  
    </Routes>
    </BrowserRouter>
<DockDemo />


    </>
  )
}

export default App
