import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="stickyHeader">
        <h1>NC-News</h1>
        <Navigation />
      </section>
    </>
  );
};

export default Header;
