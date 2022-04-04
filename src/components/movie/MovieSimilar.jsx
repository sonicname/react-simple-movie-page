import React from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1

const MovieSimilar = ({ movieID }) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${apiKey}&language=en-US&page=1`,
    fetcher
  );

  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar Movie</h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard
                  title={item.title}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                  poster_path={item.poster_path}
                  id={item.id}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieSimilar;
