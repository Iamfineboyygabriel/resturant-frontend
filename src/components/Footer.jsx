import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__col1">
            <div className="footer__logo">
              <h1>Gabriel</h1>
            </div>
            <p className="footer__desc">
              Fresh and delicious traditional Nigerian food to delight the whole
              family
            </p>
            <div className="footer__socials">
              <h4 className="footer__social__title">Follow us</h4>
              <ul>
                <li>
                  <Link
                    to="https://facebook.com"
                    target="blank"
                    rel="noopener noreferrer"
                    title="facebook"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://instagram.com"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://x.com"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <RxCross2 />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="foter__col2">
            <h3 className="footer__text__title">Link</h3>
            <ul className="footer__text">
              <li>
                <Link to="/" className="h">
                  Home
                </Link>
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
                <Link to="/policy">Privacy policy</Link>
              </li>
            </ul>
          </div>
          {/** */}
          <div className="foter__col2">
            <h3 className="footer__text__title">Support</h3>
            <ul className="footer__text">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/$">Support center</Link>
              </li>
              <li>
                <Link to="/$">Feedback</Link>
              </li>
            </ul>
          </div>
          {/**/}
          <div className="footer__col2">
            <h3 className="footer__text__title">Contact</h3>
            <ul className="footer__text">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link
                  to={`https://wa.me/2348073632834`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </Link>
              </li>

              <li>
                <a href="mailto:tundegabriel999@gmail.com" target="blank">
                  <IoIosMailOpen />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
