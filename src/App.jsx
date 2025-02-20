import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import {ProjectDS01, ProjectDS02, ProjectDS03, ProjectDS04, ProjectSE01, ProjectSE02, ProjectSE03 } from "./pages/projects/ProjectComponents"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/EACSF" element={<ProjectDS01 />} />
        <Route path="/projects/GS" element={<ProjectDS02 />} />
        <Route path="/projects/E4" element={<ProjectDS03 />} />
        <Route path="/projects/SleepConstruct" element={<ProjectDS04 />} />
				<Route path="/projects/ToDoList" element={<ProjectSE01 />} />
        <Route path="/projects/HealthTracking" element={<ProjectSE02 />} />
        <Route path="/projects/Ecommerce" element={<ProjectSE03 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;