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
    onSearch() {
      if (!this.$refs.form.validate()) return;
      console.log("Searching for:", this.searchQuery);
      this.$store
        .dispatch("addMovie", this.searchQuery)
        .then(() => {
          this.searchQuery = "";
          this.valid = false;
          this.$refs.form.resetValidation();
        })
        .catch((error) => {
          console.error("Search error:", error);
          this.$refs.form.resetValidation();
        });
    },
    onClear() {
      this.searchQuery = "";
      this.$refs.form.resetValidation();
      this.valid = false;
    },
  },
};
</script>

<style scoped></style>
