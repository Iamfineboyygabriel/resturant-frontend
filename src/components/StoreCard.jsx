import PropTypes from "prop-types";
import "../styles/store.css";

export default function StoreCard({ content }) {
  const { icon, name, info } = content;

  return (
    <div className="storeInfo__wrapper">
      <div className="storeInfo__item">
        <div className="storeInfo__icon">{icon}</div>
        <p className="storeInfo__text">{info}</p>
        <h3 className="storeInfo__title">{name}</h3>
      </div>
    </div>
  );
}

StoreCard.propTypes = {
  content: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string, // Assuming 'info' can be optional
  }).isRequired,
};
