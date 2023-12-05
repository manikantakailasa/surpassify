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

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Clients />
      <WhatWeDo />
      <Ourservice />
      <Approach />
      <Numbers />
      <Agile />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
