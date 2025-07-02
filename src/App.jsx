import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Summary from "./components/Summary.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import Certifications from "./components/Certifications.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/footer";


const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Summary />
      <Experience />
      <Projects />
      <Education />
      <Publications />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  </>
);

export default App;
