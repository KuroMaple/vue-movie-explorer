import axios from "axios";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = process.env.VUE_APP_OMDB_API_KEY;
console.log("API Key:", API_KEY); // Debugging line to check if the API key is loaded correctly
const apiClient = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
  },
});

const MovieService = {
  async getMoviesByTitle(searchTerm) {
    const response = await apiClient.get("/", {
      params: {
        t: searchTerm,
      },
    });
    return response.data;
  },

  async getMovieById(imdbID) {
    const response = await apiClient.get("/", {
      params: {
        i: imdbID,
      },
    });
    return response.data;
  },
};

export default MovieService;
