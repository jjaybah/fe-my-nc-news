import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav__container">
          <Link to="/">
            <img
              src="src/assets/NC_logo.png"
              alt="NC News logo"
              width="60px"
              height="60px"
            />
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
            src="src/assets/profile-picture.png"
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
