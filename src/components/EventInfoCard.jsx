import PropTypes from "prop-types";
import "../styles/special.css";

export default function EventInfoCard({ content }) {
  const { img, title, info } = content;

  return (
    <div className="eventsInfo__item">
      <div className="eventsInfo__item__img">
        <img src={img} alt={title} />
      </div>
      <div className="eventsInfo__item__info">
        <h2 className="eventsInfo__item__title">{title}</h2>
        <p className="eventsInfo__item__text">{info}</p>
      </div>
    </div>
  );
}

EventInfoCard.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string,
  }).isRequired,
};
