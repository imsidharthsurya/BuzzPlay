import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
export const menuData = [
  {
    name: "HOME",
    icon: HiHome,
    id: 1,
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
    id: 2,
  },
  {
    name: "WATCH LIST",
    icon: HiPlus,
    id: 3,
  },
  {
    name: "ORIGINALS",
    icon: HiStar,
    id: 4,
  },
  {
    name: "MOVIES",
    icon: HiPlayCircle,
    id: 5,
  },
  {
    name: "SERIES",
    icon: HiTv,
    id: 6,
  },
];

export const verticalData = {
  name: "verticalDot",
  icon: HiDotsVertical,
  id: 7,
};

export const userProfilePicUrl =
  "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745";

export const Base_url = "https://api.themoviedb.org/3";
export const api_key = "50c51cdc672f3011e98d8d2f47893ead";
export const img_base_url = "https://image.tmdb.org/t/p/original/";
