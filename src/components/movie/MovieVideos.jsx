import React from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config/config";

// https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}
// <iframe width="900" height="506" src="https://www.youtube.com/embed/uIKpTT5LfMU" title="YouTube video player"
// frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
// picture-in-picture" allowfullscreen></iframe>

const MovieVideos = ({ movieID }) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 3).map((item) => (
          <div key={item.id}>
            <h3 className="mb-5 text-xl font-medium text-white p-3 bg-purple-500 inline-block">
              {item.name}
            </h3>
            <div className="w-full aspect-video">
              <iframe
                width="1046"
                height="484"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieVideos;
