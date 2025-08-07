<template>
  <v-container fluid>
    <v-row dense>
      <template v-if="movies.length">
        <v-col
          v-for="movie in movies"
          :key="movie.imdbID"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="ma-2" outlined hover>
            <v-img :src="movie.Poster" height="300px"></v-img>
            <v-card-title>{{ movie.Title }}</v-card-title>
            <v-card-subtitle>{{ movie.Released }}</v-card-subtitle>
            <v-card-text>{{ movie.Plot }}</v-card-text>
          </v-card>
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12">
          <v-alert type="info" text>
            No movies found. Please try a different search.
          </v-alert>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MovieGrid",
  computed: mapState({
    movies: (state) => state.movies, // Map the movies state from Vuex store
  }),
};
</script>

<style lang="scss" scoped></style>
