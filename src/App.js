import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import WhatWeDo from "./components/whatwedo/WhatWeDo";
import Driver from "./components/driver/Driver";
import Luxury from "./components/luxury/Luxury";
import Footer from "./components/footer/Footer";
import Agile from "./components/whatwedo/Agile";
import Clients from "./components/Clients/Clients";
import Ourservice from "./components/ourservice/Ourservice";
import Approach from "./components/approach/Approach";
import Numbers from "./components/numbers/Numbers";
import Aboutus from "./components/aboutus/Aboutus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLanding from "./components/mainLanding/MainLanding";
import Contactus from "./components/contactus/Contactus";

function App() {
  return (
    <Router>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainLanding />}></Route>
          <Route path="/source" element={<Landing />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
        </Routes>

        {/* <Agile />
      <Driver />
    <Luxury /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
