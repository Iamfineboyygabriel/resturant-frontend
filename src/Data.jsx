import { FaClock } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import fooda from "../src/assets/food-1.png";
import foodb from "../src/assets/food-2.png";
import event1 from "./assets/event-weedings.png";
import event2 from "./assets/event-corporate.png";

export const data = [
  {
    icon: <FaClock />,
    name: "Opening Hours",
    info: "10 AM - 7 PM",
  },
  {
    icon: <FaMapMarkerAlt />,
    name: "Address",
    info: "GEC, Chittagong",
  },
  {
    icon: <FaPhoneAlt />,
    name: "Call Now",
    info: "+234 8073 632 843",
  },
];

export const special = [
  {
    img: fooda,
    title: "Sweet Potato Fries Bowl",
    price: "$18",
    info: "These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder, garlic, and onion, these spicy sweet potato fries are full of flavor.",
  },
  {
    img: foodb,
    title: "Vegan Salad bowl",
    price: "$20",
    info: "Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion of flavors and textures.",
  },
];

export const event = [
  {
    img: event1,
    title: "Corporate Events",
    info: "Shaif's Cuisine is the perfect venue for your corporate events. We specialize in private parties.",
  },
  {
    img: event2,
    title: "Weddings",
    info: "Shaif's Cuisine offers an intimately unique wedding experience set in a spectacular setting that is sophisticated and comfortable.",
  },
];
