import StoreCard from "./StoreCard";
import { data } from "../Data";
import "../styles/store.css";

export default function Store() {
  return (
    <section id="storeInfo">
      <div className="container__store">
        {data.map((content) => (
          <StoreCard content={content} key={content.name} />
        ))}
      </div>
    </section>
  );
}
