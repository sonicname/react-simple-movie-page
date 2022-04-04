import React from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now Playing
        </h2>

        <MovieList type={"now_playing"} />
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Top Rated
        </h2>

        <MovieList type={"top_rated"} />
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Trending
        </h2>
        ]<MovieList type={"popular"} />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
