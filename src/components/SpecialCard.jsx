// import PropTypes from "prop-types";
// import "../styles/special.css"

// export default function SpecialCard({ content }) {
//   const { img, title, price, info } = content;

//   return (
//     <div>
//       <div className="ourSpecials__wrapper">
//         <div className="ourSpecials__left">
//           <div className="ourSpecials__item">
//             <div className="ourSpecials__item__img">{img}</div>
//             <h2 className="ourSpecials__item__title">{title}</h2>
//             <h3 className="ourSpecials__item__price">${price}</h3>
//             <p className="ourSpecials__item__text">{info}</p>
//           </div>
//         </div>
//         <div className="ourSpecials__right">
//           <h2 className="ourSpecials__title">Our Specials</h2>
//           <p className="ourSpecials__text">
//             All of our food is prepared daily at our restaurants to ensure the
//             highest quality, freshest meals are delivered to our customers
//           </p>
//           <a href="./booking.html" className="btn primary-btn">
//             Book Table
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// SpecialCard.propTypes = {
//   content: PropTypes.shape({
//     img: PropTypes.node.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     info: PropTypes.string,
//   }).isRequired,
// };

import PropTypes from "prop-types";
import "../styles/special.css";

export default function SpecialCard({ content }) {
  const { img, title, price, info } = content;

  return (
      <div className="ourSpecials__item">
        <div className="ourSpecials__item__img">
          <img src={img} alt="food-image" />
        </div>
        <h2 className="ourSpecials__item__title">{title}</h2>
        <h3 className="ourSpecials__item__price">{price}</h3>
        <p className="ourSpecials__item__text">{info}</p>
      </div>
  );
}

SpecialCard.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    info: PropTypes.string,
  }).isRequired,
};
