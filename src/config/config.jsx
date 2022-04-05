export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiKey = "76af01268d250bba0f6f661ab1fbe260";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbSearchEndpoint = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type = "") => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieID = "") =>
    `${tmdbEndpoint}/${movieID}?api_key=${apiKey}`,
  getMovieSimilar: (movieID = "") =>
    `${tmdbEndpoint}/${movieID}/similar?api_key=${apiKey}&page=1`,
  getMovieListWithPage: (type = "", nextPage = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${nextPage}`,
  getMovieWithQuery: (query = "", nextPage = 1) =>
    `${tmdbSearchEndpoint}?api_key=${apiKey}&query=${query}&page=${nextPage}`,
  getMovieVideos: (movieID) =>
    `${tmdbEndpoint}/${movieID}/videos?api_key=${apiKey}`,
  getMovieCredits: (movieID) =>
    `${tmdbEndpoint}/${movieID}/credits?api_key=${apiKey}`,
  getImageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  getImageW500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
