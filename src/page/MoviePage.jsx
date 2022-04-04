import React from "react";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=76af01268d250bba0f6f661ab1fbe260`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here to search..."
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              id={movie.id}
            />
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
