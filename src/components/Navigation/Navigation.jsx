import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navlink">Home</Link>
        <Link to="/articles" className="navlink">Articles</Link>
        <Link to="/topics" className="navlink">Topics</Link>
      </nav>
    </>
  );
};

export default Navigation;
