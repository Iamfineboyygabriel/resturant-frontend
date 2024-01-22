// import "../styles/special.css";
// import fooda from "../assets/food-1.png";
// import foodb from "../assets/food-2.png";

// export default function Special() {
//   return (
//     <section id="ourSpecials" data-aos="fade-up">
//       <div className="container">
//         <div className="ourSpecials__wrapper">
//           <div className="ourSpecials__left">
//             <div className="ourSpecials__item">
//               <div className="ourSpecials__item__img">
//                 <img src={fooda} alt="Sweet Potato Fries Bowl" />
//               </div>
//               <h2 className="ourSpecials__item__title">
//                 Sweet Potato Fries Bowl
//               </h2>
//               <h3 className="ourSpecials__item__price">$18</h3>
//               <p className="ourSpecials__item__text">
//                 These Sweet Potato Fries bowl are a glorious, messy plate of
//                 goodness. Crispy sweet potato fries loaded with lots of fresh
//                 summer vegetables and a lime ranch. By adding a seasoning blend
//                 with chipotle powder, garlic, and onion, these spicy sweet
//                 potato fries are full of flavor.
//               </p>
//             </div>
//             <div className="ourSpecials__item">
//               <div className="ourSpecials__item__img">
//                 <img src={foodb} alt="Vegan Salad Bowl" />
//               </div>
//               <h2 className="ourSpecials__item__title">Vegan Salad Bowl</h2>
//               <h3 className="ourSpecials__item__price">$18</h3>
//               <p className="ourSpecials__item__text">
//                 Vegan salad bowl are immensely satisfying with any combination
//                 of whole grains, pulses, noodles, raw or cooked fruits, and
//                 veggies all topped off with a delicious sauce or dressing – each
//                 bite is an explosion of flavors and textures.
//               </p>
//             </div>
//           </div>
//           <div className="ourSpecials__right">
//             <h2 className="ourSpecials__title">Our Specials</h2>
//             <p className="ourSpecials__text">
//               All of our food is prepared daily at our restaurants to ensure the
//               highest quality, freshest meals are delivered to our customers
//             </p>
//             <a href="./booking.html" className="btn primary-btn">
//               Book Table
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { special } from "../Data";
// import SpecialCard from "./SpecialCard";
// import "../styles/special.css";

// export default function Special() {
//   return (
//     <section id="ourSpecials" data-aos="fade-up">
//       <div className="container">
//         {special.map((content) => (
//           <SpecialCard content={content} key={content.name} />
//         ))}
//       </div>
//       <div className="ourSpecials__right">
//         <h2 className="ourSpecials__title">Our Specials</h2>
//         <p className="ourSpecials__text">
//           All of our food is prepared daily at our restaurants to ensure the
//           highest quality, freshest meals are delivered to our customers
//         </p>
//         <a href="./booking.html" className="btn primary-btn">
//           Book Table
//         </a>
//       </div>
//     </section>
//   );
// }

import { special } from "../Data";
import SpecialCard from "./SpecialCard";
import "../styles/special.css";

export default function Special() {
  return (
     <section id="ourSpecials" data-aos="fade-up">
      <div className="container">
        <div className="ourSpecials__wrapper">
          <div className="ourSpecials__left">
            {special.map((content) => (
              <SpecialCard content={content} key={content.name} />
            ))}
        <div className="ourSpecials__right">
          <h2 className="ourSpecials__title">Our Specials</h2>
          <p className="ourSpecials__text">
            All of our food is prepared daily at our restaurants to ensure the
            highest quality, freshest meals are delivered to our customers
          </p>
          <a href="./booking.html" className="btn2">
            Book Table
          </a>
        </div>
          </div>
        </div>
      </div>
      </section>
  );
}
