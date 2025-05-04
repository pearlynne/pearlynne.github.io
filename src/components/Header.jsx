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
        <Link to="/publications">Publications</Link>
				<a href="https://drive.google.com/file/d/13y_Zb8VJ0ZqM2VsrVJ__B-R3hyJNJmdI/view?usp=sharing" target="_blank">Resume</a>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
export default Header;
