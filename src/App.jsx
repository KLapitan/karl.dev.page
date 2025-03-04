import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar"

import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"



function App() {
  return (
    <Router> 
      <NavBar/>
      <Routes>
      {/* root path or startingpoint of the page */}
      <Route path="/" element={<About />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/projects" element={<Projects />}  />
      <Route path="/contact" element={<Contact />}  />
      </Routes>
     </Router>
  )
}

export default App
