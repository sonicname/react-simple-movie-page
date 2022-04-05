import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config/config";

const BannerItem = ({ item: { poster_path, title, id } }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg" />

      <img
        src={`${tmdbAPI.getImageOriginal(poster_path)}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>

          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>

          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>

        <Button
          onClick={() => navigate(`/movie/${id}`)}
          type={"button"}
          className={
            "active:scale-90 hover:bg-opacity-20 transition-all w-auto"
          }
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

export default BannerItem;
