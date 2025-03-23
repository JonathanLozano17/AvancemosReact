import React from "react";
import TopLanding from "./Landing/TopLanding";
import AcercaDe from "./Landing/AcercaDe";
import LoanServices from "./Landing/LoanServices";
import TestimonialsSlider from "./Landing/TestimonialSlider";
import ContactUs from "./Landing/ContactUs";
import { ContactForm } from "../components/ContactForm";

const Prueba: React.FC = () => {
  return (
    <>
      <TopLanding/>
      <AcercaDe />
      <LoanServices />
      <TestimonialsSlider />
      <ContactUs />
      <ContactForm />
    </>
  );
};

export default Prueba;