import { useState, useEffect } from "react";
import { Link } from "react-router";
import logo from "../assets/NC_logo.png";
import profilePic from "../assets/profile-picture.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="nav__container">
        <Link to="/">
          <img src={logo} alt="NC News logo" width="60px" height="60px" />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>

        <ul className={`nav__list ${isMenuOpen ? "open" : ""}`}>
          <li className="nav__link">
            <Link className="nav__link" to="/articles">
              All News
            </Link>
          </li>
          <li className="nav__link">
            <Link className="nav__link" to="/topics/coding">
              Coding
            </Link>
          </li>
          <li className="nav__link">
            <Link className="nav__link" to="/topics/football">
              Football
            </Link>
          </li>
          <li className="nav__link">
            <Link className="nav__link" to="/topics/cooking">
              Cooking
            </Link>
          </li>
        </ul>

        <img
          src={profilePic}
          alt="user-profile-picture"
          width="50px"
          height="50px"
        />
      </nav>
    </header>
  );
}

export default Header;
