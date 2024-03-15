import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <section className="lost">
      <h2>Hey, it looks like you're a little lost!</h2>
      <p>Let's help you find your way!</p>

      <br></br>
<p>Where would you like to go? use these links!</p>
      <Link to="https://www.reddit.com" className="lost-link">
        Were you looking for the real reddit?
      </Link>
      <Link to="/" className="lost-link">Click here to go 'Home'</Link>
      <Link to="/articles" className="lost-link">Want to view more articles? click here!</Link>
      <Link to="/topics" className="lost-link">How about some topics?</Link>
    </section>
  );
};

export default NotFound;
