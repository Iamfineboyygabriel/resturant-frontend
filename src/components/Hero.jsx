import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import herofood from "../assets/hero-food.png";
import "../styles/home.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      // Additional customization options...
    });
  }, []);

  return (
    <section id="hero">
      <div className="containerz">
        <div
          className="hero__wrapper"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="hero__left">
            <div className="hero__left__wrapper">
              <h1 className="hero__heading">The flavor of tradition</h1>
              <p className="hero__info">
                We are a multi-cuisine restaurant offering a wide variety of
                food experience in both casual and fine dining environment.
              </p>
              <div className="button__wrapper">
                <Link to="/$" className="primary-btn">
                  Explore Table
                </Link>
                <Link to="/" className="book">
                  Book Table
                </Link>
              </div>
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__imgWrapper">
              <img src={herofood} alt="hero-food-image" className="hero" />
            </div>
          </div>
        </div>
      </div>
      i
    </section>
  );
}
