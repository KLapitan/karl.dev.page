import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar"


import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import { userInfo } from "./utils/Karl.db"


export const Home = ()=> {
return (
  <h2 className="justify-center items-center align-middle ">Karl.dev</h2>
)
}
function App() {

  return (
    <Router>
      <NavBar/>
    <Routes>
      {/* root path or startingpoint of the page */}
      <Route path="/" element={<Home />}  />
      <Route path="/about" element={<About  {...userInfo}   />}  />
      <Route path="/projects" element={<Projects />}  />
      <Route path="/contact" element={<Contact />}  />
      </Routes>
     </Router>
  )
}

export default App
