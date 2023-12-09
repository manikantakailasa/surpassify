import { Route, Routes } from "react-router";
import Clients from "../Clients/Clients";
import Aboutus from "../aboutus/Aboutus";
import Approach from "../approach/Approach";
import Landing from "../landing/Landing";
import Numbers from "../numbers/Numbers";
import Ourservice from "../ourservice/Ourservice";
import WhatWeDo from "../whatwedo/WhatWeDo";
import Contactus from "../contactus/Contactus";

const MainLanding = () => {
  return (
    <>
      <Landing />
      <Clients />
      <WhatWeDo />
      <Ourservice />
      <Approach />
      <Numbers />
      <Aboutus />
      <Routes>
        <Route path="/source" component={<Landing />}></Route>
        <Route path="/contact" component={<Contactus />}></Route>
      </Routes>
    </>
  );
};

export default MainLanding;
