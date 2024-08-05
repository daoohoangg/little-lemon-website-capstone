import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './nav/HomePage';
import BookingPage from './nav/BookingForm';
import React, { useState } from "react";

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/bookingpage" element={<BookingPage />}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
