import Discount from "../components/Discount";
import Hero from "../components/Hero";
import Special from "../components/Special";
import Store from "../components/Store";
import TopDishes from "../components/TopDishes";
import Event from "../components/Events"

function HomePage() {
  return (
    <div>
      <Hero />
      <Store />
      <Special />
      <TopDishes />
      <Discount />
      <Event/>
    </div>
  );
}

export default HomePage;
