import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";


import "./App.css"
import Header from "./components/Header";
import Quiz from "./components/Quiz.js";
import Home from "./components/Home.js";




function App() {

 
  
 
  
  return (
    <div className="app">
   <BrowserRouter>
   <Header /> 

   <Routes>
   
   <Route path="/" element={<Home  />}/>
   <Route path="/quiz" element={<Quiz />}/>
   </Routes>

   
   </BrowserRouter>
  
  </div>
  
  )
}

export default App;
