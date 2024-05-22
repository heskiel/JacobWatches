import { Home } from "../pages";
import HotelListings from "../pages/HotelListings";
const RouteArr = [
  {
    name: "Home",
    path: "/",
    key: "home",
    route: "/",
    page: <Home />,
  },

  {
    name: "HotelListings",
    path: "/hotel-listings",
    key: "/hotel-listings",
    route: "/hotel-listings",
    page: <HotelListings />,
  },
];

export default RouteArr;
