<template>
  <v-container class="home" fluid>
    <v-row justify="center" align="center" style="height: 850px">
      <v-col cols="12" md="8" class="text-center" style="height: 100%">
        <v-card elevation="1" class="pa-4" style="height: 100%">
          <v-card-text> Search for your favorite movies below! </v-card-text>
          <search-bar />
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
<style scoped>
.home {
  min-height: 90vh;
}
</style>
