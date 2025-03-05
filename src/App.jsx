import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from "motion/react";
import LoadingThreeDotsPulse from "./components/Loading";

import NavBar from "./components/NavBar"


import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import { userInfo } from "./utils/Karl.db"


const  App = () => {

const [display ,setDisplay] = useState(false)
const [dotsDisplay ,setDotsDisplay] =useState(true)
const handleDisplay =() => {
  setDisplay(!display)
}

const handleDots = () => {
  if(setDisplay(display)){
    setDotsDisplay(!false)
  }

}

  return (
    <Router>
      <>
      <NavBar/>
        <div  className=" bg-wheatBg">
    <Routes>
  
      {/* root path or startingpoint of the page */}

   {/* Redirect "/" to "/about"  when browser load direct to about section*/}
   <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<About  {...userInfo}  />  } />
      <Route path="/projects" element={<Projects />}  />
      <Route path="/contact" element={<Contact />}  />
      </Routes>
        </div>
      </>
 
     </Router>
  )
}

export default App
