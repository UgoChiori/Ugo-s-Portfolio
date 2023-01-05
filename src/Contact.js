import React from 'react';
import UgoImg1 from './Components/UgoImg1';
import Footer from "./Components/Footer";
// import "./contact.css";
import UgoForm from './Components/UgoForm';



const Contact = () => {
  return <div>
    {/* <Navigation /> */}
    <UgoImg1 heading="CONTACT." text="Get in touch with me"
    
    />
    <UgoForm />
    <Footer />
  </div>
}

export default Contact
