// TopDishes.jsx
import fooda from "../assets/food-1.png";
import foodb from "../assets/food-2.png";
import food7 from "../assets/food-7.png";
import "../styles/dishes.css";

export default function TopDishes() {
  return (
    <section id="dishGrid" data-aos="fade-up">
      <div className="container">
        <h2 className="dishGrid__title">Top Dishes</h2>
        <div className="dishGrid__wrapper">
          <div className="dishGrid__item first-item">
            <div className="dishGrid__item__img">
              <img src={fooda} alt="Vegan Salad Bowl" />
            </div>
            <div className="dishGrid__item__info">
              <h3 className="dishGrid__item__title">Vegan Salad Bowl</h3>
              <h3 className="dishGrid__item__price">$12</h3>
            </div>
          </div>
          <div className="dishGrid__item">
            <div className="dishGrid__item__img">
              <img src={foodb} alt="Vegan Pesto Zoodles" />
            </div>
            <div className="dishGrid__item__info">
              <h3 className="dishGrid__item__title">Vegan Pesto Zoodles</h3>
              <h3 className="dishGrid__item__price">$12</h3>
            </div>
          </div>
          <div className="dishGrid__item">
            <div className="dishGrid__item__img">
              <img src={food7} alt="Hot Green Bowl" />
            </div>
            <div className="dishGrid__item__info">
              <h3 className="dishGrid__item__title">Hot Green Bowl</h3>
              <h3 className="dishGrid__item__price">$12</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
