import { Route, Routes } from "react-router";
import Clients from "../Clients/Clients";
import Aboutus from "../aboutus/Aboutus";
import Approach from "../approach/Approach";
import Landing from "../landing/Landing";
import Numbers from "../numbers/Numbers";
import Ourservice from "../ourservice/Ourservice";
import WhatWeDo from "../whatwedo/WhatWeDo";
import Contactus from "../contactus/Contactus";
import Accredited from "../accredited/Accredited";
import Success from "../success/Success";

const MainLanding = () => {
  return (
    <>
      <Landing />
      <Clients />
      <WhatWeDo />
      <Ourservice />
      <Accredited />
      <Approach />
      <Numbers />
      <Success />
      <Aboutus />
      <Routes>
        <Route path="/source" component={<Landing />}></Route>
        <Route path="/contact" component={<Contactus />}></Route>
      </Routes>
    </>
  );
};

export default MainLanding;
