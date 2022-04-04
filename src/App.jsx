import React from "react";
import "swiper/scss";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./page/MoviePage";
import MovieDetails from "./page/MovieDetails";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Banner />
                <HomePage />
              </React.Fragment>
            }
          />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movie/:movieID" element={<MovieDetails />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
