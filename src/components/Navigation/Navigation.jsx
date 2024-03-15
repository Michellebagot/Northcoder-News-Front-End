import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <h6> This is the Navigation bar</h6>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </>
  );
};

export default Navigation;
