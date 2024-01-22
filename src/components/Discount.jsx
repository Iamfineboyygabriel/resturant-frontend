import food5 from "../assets/food-5.png";
import food4 from "../assets/food-4 (1).png";
import food3 from "../assets/fk.png";
import "../styles/discount.css";

export default function Discount() {
  return (
    <section id="discount" data-aos="fade-up">
      <div className="container">
        <div className="discount__wrapper">
          <div className="discount__images">
            <div className="discount__img1">
              <img src={food5} alt="" />
            </div>
            <div className="discount__img2">
              <img src={food4} alt="" />
            </div>
            <div className="discount__img3">
              <img src={food3} alt="" />
            </div>
          <div className="discount__info">
            <h3 className="discount__text">20% OFF</h3>
            <h3 className="discount__title">Demo Dish For Discount</h3>
            <h3 className="discount__price">
              <span className="discount__oldPrice">$45</span>
              <span className="discount__newPrice">$35</span>
            </h3>
            <a className=" primary-bt" href="./booking.html">
              Book Table
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
