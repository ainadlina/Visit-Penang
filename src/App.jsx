import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Popular from "./Popular";
import Adventure from "./Adventure";
import Footer from "./Footer";
import Foodie from "./Foodie";
import Hotels from "./Hotels";
import EscapePenang from "./EscapePenang"; 
import PenangHill from "./PenangHill";
import Kekloksitemple from "./Kekloksitemple";
import Pesta from "./Pesta";
import Bridge from "./Bridge";
import BatuFerringhi from "./BatuFerringhi";
import Entopia from "./Entopia";
import StreetArt from "./StreetArt";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Popular />
                <Foodie />
                <Hotels />
                <Adventure />
                <Footer />
              </>
            } 
          />

          {/* Route for ESCAPE Penang */}
          <Route path="/EscapePenang" element={<EscapePenang />} />
          <Route path="/PenangHill" element={<PenangHill />} />
          <Route path="/Kekloksitemple" element={<Kekloksitemple />} />
          <Route path="/Pesta" element={<Pesta />} />
          <Route path="/Bridge" element={<Bridge />} />
          <Route path="/BatuFerringhi" element={<BatuFerringhi />} />
          <Route path="/Entopia" element={<Entopia />} />
          <Route path="/StreetArt" element={<StreetArt />} />
          {/* Add more routes for other detailed pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
