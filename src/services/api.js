import axios from "axios";
import { Base_url, api_key } from "../utils/constants";
const trendingMovies = axios.get(
  `${Base_url}/trending/all/day?api_key=${api_key}`
);

export default {
  trendingMovies,
};
