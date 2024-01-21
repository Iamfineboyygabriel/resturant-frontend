import { Link } from "react-router-dom";
import "../styles/nav.css";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="main__container">
      <div className="container">
        <div className="logo">
          <Link className="logo__name">Gabriel</Link>
        </div>
        <nav>
          <div className="nav__bgOverlay">
            <ul>
              <div className="nav__list__wrapper">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/#About">About</Link>
                </li>
                <li>
                  <Link to="/$" className="btn">
                    Book Table
                  </Link>
                </li>
              </div>

              <IoMdMenu />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
