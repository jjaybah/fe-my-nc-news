import { Link } from "react-router";

function Header({ topic, setTopic }) {
  const handleClick = (e) => {
    setTopic(e.target.name);
  };
  console.log(topic, "topic in header after set");
  return (
    <>
      <header className="header">
        <nav className="nav__container">
          <img
            src="src/assets/NC_logo.png"
            alt="NC News logo"
            width="7%"
            height="7%"
          />
          <ul className="nav__list">
            <li className="nav__link">
              <Link
                className="nav__link"
                to="/articles"
                onClick={handleClick}
                name=""
              >
                All News
              </Link>
            </li>
            <li className="nav__link">
              <Link
                className="nav__link"
                to="/articles?topic=coding"
                onClick={handleClick}
                name="coding"
              >
                Coding
              </Link>
            </li>
            <li className="nav__link">
              <Link
                className="nav__link"
                to="/articles?topic=football"
                onClick={handleClick}
                name="football"
              >
                Football
              </Link>
            </li>
            <li className="nav__link">
              <Link
                className="nav__link"
                to="/articles?topic=cooking"
                onClick={handleClick}
                name="cooking"
              >
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
