import Vue from "vue";
import Vuex from "vuex";
import MovieService from "../../services/MovieService";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    allMovies: (state) => state.movies,
    movieCount: (state) => state.movies.length,
    movieById: (state) => (id) => state.movies.find((movie) => movie.id === id),
  },
  mutations: {
    PUSH_MOVIE: (state, movie) => {
      state.movies.push(movie);
    },
    SET_MOVIES: (state, movies) => {
      state.movies = movies;
    },
  },
  actions: {
    addMovie: async ({ commit }, searchTerm) => {
      try {
        const movie = await MovieService.getMoviesByTitle(searchTerm);
        if (movie && movie.Response !== "False") {
          commit("PUSH_MOVIE", movie);
        } else {
          console.warn(`No movie found for "${searchTerm}"`);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
  },
  modules: {},
});
