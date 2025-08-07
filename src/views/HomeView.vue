<template>
  <v-container class="home" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="text-center">
        <v-card elevation="2" class="pa-4">
          <v-card-text> Search for your favorite movies below! </v-card-text>
          <search-bar />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "HomeView",
  components: {
    SearchBar,
  },
};
</script>
