import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config/config";
import useSWR from "swr";

// NowPlaying: https://api.themoviedb.org/3/movie/now_playing?api_key=76af01268d250bba0f6f661ab1fbe260

const MovieList = ({ type }) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=76af01268d250bba0f6f661ab1fbe260`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
                poster_path={item.poster_path}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
