import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="stickyHeader">
        <h1>NC-News</h1>
        <h2>Level up your newsfeed</h2>
        <Navigation />
      </section>
    </>
  );
};

export default Header;
