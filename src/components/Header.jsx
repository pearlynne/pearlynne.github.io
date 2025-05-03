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
    // console.log(sectionId);
  };

  return (
    <header>
      <div className="name">
        <Link to="/">Pearlynne</Link>
      </div>
      <nav>
        <a href="#about" onClick={() => handleSectionClick("about")}>
          About
        </a>
        <Link to="/portfolio">Projects</Link>
        <Link to="/publications">Publications</Link>
				<Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
export default Header;
