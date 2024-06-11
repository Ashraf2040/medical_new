import axios from "axios";

const getNearByPlace = (category, lat, lng) => axios.get("/api/nearby?category="+category+"&lat="+lat+"&lng="+lng);

const GlobalApi = { getNearByPlace };

export default GlobalApi;