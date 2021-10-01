import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch , Redirect} from "react-router-dom";

import Newsec from "./Newsec";
import Navbar from "./Navbar";
import Details from "./Details";
import Sec3 from "./Sec3"
import Footer from "./Footer";
import Sec4 from "./Sec4";


const App = () => {
  return (
    <>
      <Navbar/>
      <Newsec/>
  
      <Sec3/>
      <Sec4/>
      <Footer/>
    </>
  );
};
export default App;
