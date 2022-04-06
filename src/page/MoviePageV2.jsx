import React, { useEffect } from "react";
import { fetcher, tmdbAPI } from "../config/config";
import MovieCard, { MovieCardSkeleton } from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import { v4 } from "uuid";
import useSWRInfinite from "swr/infinite";
import Button from "../components/button/Button";

const itemsPerPage = 20;

const MoviePageV2 = () => {
  const [nextPage, setNextPage] = React.useState(1);
  const [filter, setFilter] = React.useState("");
  const [url, setUrl] = React.useState(
    tmdbAPI.getMovieListWithPage("popular", nextPage)
  );
  const filterDebounce = useDebounce(filter, 1000);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );
  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  const loading = !data && !error;
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieWithQuery(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieListWithPage("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
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
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              id={movie.id}
            />
          ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          onClick={() => (isReachingEnd ? {} : setSize(size + 1))}
          disabled={isReachingEnd}
          className={`${
            isReachingEnd ? "bg-slate-300" : ""
          } inline-block max-w-[200px]`}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default MoviePageV2;
