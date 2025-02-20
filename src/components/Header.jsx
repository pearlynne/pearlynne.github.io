import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on Home, navigate there first
      navigate("/");
    }
    window.location.href = `/#${sectionId}`;
    console.log(sectionId);
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <a href="#about" onClick={() => handleSectionClick("about")}>
          About
        </a>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
        <a href="#contact" onClick={() => handleSectionClick("contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
}
export default Header;
