import React, { lazy, Suspense } from "react";
import "swiper/scss";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";

const HomePage = lazy(() => import("./page/HomePage"));
const MoviePage = lazy(() => import("./page/MoviePage"));
const MovieDetails = lazy(() => import("./page/MovieDetails"));

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<React.Fragment />}>
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
      </Suspense>
    </React.Fragment>
  );
};

export default App;
