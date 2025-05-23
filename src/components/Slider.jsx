import React, { useEffect, useState, useRef } from "react";
import services from "../services/api";
import { img_base_url } from "../utils/constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenwidth = window.innerWidth;

const Slider = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const imageRef = useRef(null);
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = async () => {
    const { data } = await services.trendingMovies;
    setTrendingMovies(data?.results);
    console.log("@@@sid trending movies are: ", data.results);
  };
  const scrollToLeft = (element) => {
    element.scrollLeft -= screenwidth - 110;
  };
  const scrollToRight = (element) => {
    element.scrollLeft += screenwidth - 110;
  };
  return (
    <div
      className="flex overflow-x-auto w-full px-16 py-4 no-scrollbar scroll-smooth"
      ref={imageRef}
    >
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mt-[150px] cursor-pointer"
        onClick={() => {
          console.log("left clickeds");

          scrollToLeft(imageRef.current);
        }}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute right-15 mt-[150px] cursor-pointer"
        onClick={() => {
          console.log("right clickeds");
          scrollToRight(imageRef.current);
        }}
      />

      {trendingMovies.map((trendingMovie, index) => {
        return (
          <img
            key={trendingMovie?.id}
            src={`${img_base_url}${trendingMovie?.backdrop_path}`}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        );
      })}
    </div>
  );
};

export default Slider;
