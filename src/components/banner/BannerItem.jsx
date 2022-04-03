import React from "react";

const BannerItem = ({ item }) => {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg" />

      <img
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{item.title}</h2>
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

        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
