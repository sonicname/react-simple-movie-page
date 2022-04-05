import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config/config";

const MovieCredits = ({ movieID }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieCredits(movieID), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item, index) => (
          <div key={index} className="cast-item">
            <img
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              src={`${tmdbAPI.getImageOriginal(item.profile_path)}`}
              alt=""
            />
            <h3 className="text-xl font-medium text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredits;
