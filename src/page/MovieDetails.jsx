import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config/config";
import MovieCredits from "../components/movie/MovieCredits";
import MovieVideos from "../components/movie/MovieVideos";
import MovieSimilar from "../components/movie/MovieSimilar";

const MovieDetails = () => {
  const { movieID } = useParams();
  const { data, error } = useSWR(tmdbAPI.getMovieDetail(movieID), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.getImageOriginal(backdrop_path)})`,
          }}
        />
      </div>
      <div className="w-full h-[500px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`${tmdbAPI.getImageOriginal(poster_path)}`}
          alt=""
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>

      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              key={item.id}
              className="py-2 px-4 border border-primary text-primary rounded-md"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}

      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>

      <MovieCredits movieID={movieID} />
      <MovieVideos movieID={movieID} />
      <MovieSimilar movieID={movieID} />
    </div>
  );
};

export default MovieDetails;
