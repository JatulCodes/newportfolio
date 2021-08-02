import React from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import  Freelancer from "./Freelancer";
import Footer from "./Footer"
import Work from "./Work,";
import Blogg from './Blogg';
import ContactUs from './ContactUs'


const App =()=>{
  return(
  <>
  <Header/>
  <About/>
  <Services/>
  <Freelancer/>
  <Work/>
  <Blogg/>
  <ContactUs/>
  <Footer/>

  </>
  );
};
export default App;