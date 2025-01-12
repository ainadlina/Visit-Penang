import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Adventure from "./components/Adventure";
import Footer from "./components/Footer";
import Foodie from "./components/Foodie";
import Hotels from "./components/Hotels";
import EscapePenang from "./components/EscapePenang"; 
import PenangHill from "./components/PenangHill";
import Kekloksitemple from "./components/Kekloksitemple";
import Pesta from "./components/Pesta";
import Bridge from "./components/Bridge";
import BatuFerringhi from "./components/BatuFerringhi";
import Entopia from "./components/Entopia";
import StreetArt from "./components/StreetArt";


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
