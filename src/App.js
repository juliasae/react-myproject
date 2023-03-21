
import React from "react"

import Home from "./pages/Home"
import Member from "./pages/Member"
import Slutpris from "./pages/Slutpris"
import Salja from "./pages/Salja"
import Hitta from "./pages/Hitta"
import Guide from "./pages/Guide"
import Nyheter from "./pages/Nyheter"
import Nyprod from "./pages/Nyprod"
import Bygga from "./pages/Bygga"
import Loggain from "./pages/Loggain"


import Footer from "./components/Footer"
import Header from "./components/Header"
import Like from "./components/Like"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return( 
  <div>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route path="/bli-medlem" element={<Member/>}/>
        <Route path="/slutpris" element={<Slutpris/>}/>
        <Route path="/salja-bostad" element={<Salja/>}/>
        <Route path="/hitta-maklare" element={<Hitta/>}/>
        <Route path="/guide-till-att-salja" element={<Guide/>}/>
        <Route path="/nyheter" element={<Nyheter/>}/>
        <Route path="/nyproduktion" element={<Nyprod/>}/>
        <Route path="/bygga-nytt" element={<Bygga/>}/>
        <Route path="/logga-in" element={<Loggain/>}/>
      </Routes>
      <Routes>
        <Route exact path="/nyproduktion" element={<Like />}/>
      </Routes>
      <Footer/>
  </Router>
    
  </div>
  );
}

export default App;
