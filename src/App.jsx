import React from "react";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/scss";

const App = () => {
  return (
    <React.Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>

      <Banner />

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

export default App;
