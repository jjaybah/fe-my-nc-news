import { Link } from "react-router";
import logo from "../assets/NC_logo.png";
import profilePic from "../assets/profile-picture.png";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav__container">
          <Link to="/">
            <img src={logo} alt="NC News logo" width="60px" height="60px" />
          </Link>
          <ul className="nav__list">
            <li className="nav__link">
              <Link className="nav__link" to="/articles">
                All News
              </Link>
            </li>
            <li className="nav__link">
              <Link className="nav__link" to="/articles?topic=coding">
                Coding
              </Link>
            </li>
            <li className="nav__link">
              <Link className="nav__link" to="/articles?topic=football">
                Football
              </Link>
            </li>
            <li className="nav__link">
              <Link className="nav__link" to="/articles?topic=cooking">
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
    </>
  );
}

export default Header;
