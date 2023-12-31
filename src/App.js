import React from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLanding from "./components/mainLanding/MainLanding";
import Contactus from "./components/contactus/Contactus";
import Services from "./components/tabs/services/Services";

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
          <Route exact path="surpassify/" element={<MainLanding />}></Route>
          <Route path="surpassify/source" element={<Landing />}></Route>
          <Route path="surpassify/contact" element={<Contactus />}></Route>
          <Route path="surpassify/services" element={<Services />}></Route>
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
