import { event } from "../Data";
import EventInfoCard from "./EventInfoCard";
import "../styles/eventinfo.css";

export default function Special() {
  return (
    <section id="ourSpecials" data-aos="fade-up">
      <div className="container">
        <div className="ourSpecials__wrapper">
          <div className="ourSpecials__left">
            {event.map((content) => (
              <EventInfoCard content={content} key={content.name} />
            ))}
          </div>
          <div className="eventsInfo__right">
            <h2 className="eventsInfo__title">Book For Events</h2>
            <p className="eventsInfo__text">
              Book your private event or corporate function at Gabriels cuisine
              to experience a truly unique experience.
            </p>
            <a href="./contact.html" className="btn primary-btn">
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
