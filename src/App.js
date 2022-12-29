import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
