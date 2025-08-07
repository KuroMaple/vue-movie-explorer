<template>
  <v-sheet class="mx-auto pa-4" width="600" elevation="3" rounded>
    <v-form @submit.prevent="onSearch" ref="form" v-model="valid">
      <v-row align="start" no-gutters>
        <v-col cols="12" sm="9">
          <v-text-field
            v-model="searchQuery"
            prepend-inner-icon="mdi-magnify"
            label="Search for movies..."
            solo
            single-line
            clearable
            :rules="rules"
            dense
            hide-details="auto"
            autofocus
            @click:clear="onClear"
            style="min-height: 56px"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn :disabled="!valid" color="primary" type="submit" block
            >Search</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      valid: false,
      searchQuery: "",
      rules: [(v) => !!v || "Movie title is required"],
    };
  },
  methods: {
    // You can add methods here to handle search functionality
    onSearch() {
      if (!this.$refs.form.validate()) return;
      console.log("Searching for:", this.searchQuery);
      this.$store
        .dispatch("addMovie", this.searchQuery)
        .then((response) => {
          console.log("Search results:", response);
          this.searchQuery = ""; // Clear the search input after submission
          this.valid = false; // Reset the form validation state
          this.$refs.form.resetValidation();
        })
        .catch((error) => {
          console.error("Search error:", error);
          this.$refs.form.resetValidation(); // Reset validation on error
        });
    },
    onClear() {
      this.searchQuery = ""; // Clear the search input
      this.$refs.form.resetValidation(); // Reset validation state
      this.valid = false; // Reset the form validation state
    },
  },
};
</script>

<style scoped></style>
