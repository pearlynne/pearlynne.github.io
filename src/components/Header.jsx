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
        <Link to="/">pearlynne</Link>
      </div>
      <nav>
        <Link to="/consulting">Consulting</Link>
        <Link to="/portfolio">Works</Link>
        <Link to="/publications">Publications</Link>
				<a href="https://drive.google.com/file/d/1tSTY6SJTF-GCiAEXD4yp_4EGcHk8qZY8/view?usp=sharing" target="_blank">Resume</a>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
export default Header;
