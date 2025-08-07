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
    AddMovieBySearch: async ({ commit }, searchTerm) => {
      try {
        const response = await MovieService.getMoviesByTitle(searchTerm);
        commit("PUSH_MOVIE", response.Search);
        console.log("Movies added:", response.Search);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
  },
  modules: {},
});
