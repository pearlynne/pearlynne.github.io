import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Consulting from "./pages/consulting";
import Portfolio from "./pages/portfolio";
import Publications from "./pages/publications";
import ProjectTemplate from "./components/ProjectTemplate";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import MSUAutismLabResources from "./pages/workshops/msuAutismLab";
import PublicResources from "./pages/publicresources";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/projects/:id" element={<ProjectTemplate />} />
          <Route path="/MSUAutismLab" element={<MSUAutismLabResources />} />
          <Route path="/resources" element={<PublicResources />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
