import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";
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
          <Route exact path="./" element={<MainLanding />}></Route>
          <Route path="./source" element={<Landing />}></Route>
          <Route path="./contact" element={<Contactus />}></Route>
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
