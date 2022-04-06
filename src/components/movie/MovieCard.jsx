import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config/config";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ title, release_date, vote_average, poster_path, id }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        className="w-full h-[250px] object-cover rounded-lg mb-5"
        src={`${tmdbAPI.getImageW500(poster_path)}`}
        alt=""
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>

        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>

        <Button
          type={"button"}
          onClick={() => navigate(`/movie/${id}`)}
          className={"active:scale-90 hover:bg-opacity-20 transition-all"}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <LoadingSkeleton
        width={"100%"}
        height={"250px"}
        radius={"8px"}
        className={"mb-5"}
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">
          <LoadingSkeleton width={"100%"} height={"20px"} />
        </h3>

        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>
            <LoadingSkeleton width={"50px"} height={"10px"} />
          </span>
          <span>
            <LoadingSkeleton width={"30px"} height={"10px"} />
          </span>
        </div>

        <LoadingSkeleton width={"100%"} height={"45px"} radius={"6px"} />
      </div>
    </div>
  );
};

export default MovieCard;
