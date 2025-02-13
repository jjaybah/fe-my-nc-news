import { useState, useEffect } from "react";
import { NavLink } from "react-router";
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
        <NavLink to="/">
          <img src={logo} alt="NC News logo" width="60px" height="60px" />
        </NavLink>

        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>

        <ul className={`nav__list ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link__active" : "nav__link"
              }
              to="/articles"
              end
              onClick={() => setIsMenuOpen(false)}
            >
              All News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link__active" : "nav__link"
              }
              to="/topics/coding"
              end
              onClick={() => setIsMenuOpen(false)}
            >
              Coding
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link__active" : "nav__link"
              }
              to="/topics/football"
              end
              onClick={() => setIsMenuOpen(false)}
            >
              Football
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link__active" : "nav__link"
              }
              to="/topics/cooking"
              end
              onClick={() => setIsMenuOpen(false)}
            >
              Cooking
            </NavLink>
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
