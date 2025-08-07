<template>
  <v-container
    fluid
    class="home fill-height d-flex align-center justify-center"
    style="min-height: 90vh"
  >
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8" class="text-center" style="height: 100%">
        <v-card elevation="1" class="pa-4" style="height: 100%">
          <v-card-text>
            <h2>Search for your favorite movies below!</h2>
          </v-card-text>

          <search-bar class="mb-4" />
          <movie-grid />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "HomeView",
  components: {
    SearchBar,
    MovieGrid,
  },
};
</script>

<style scoped></style>
