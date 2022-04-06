import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import { fetcher, tmdbAPI } from "../../config/config";
import useSWR from "swr";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      {isLoading && (
        <React.Fragment>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
        </React.Fragment>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
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
      )}
    </div>
  );
};

export default MovieList;
