<template>
  <v-app>
    <v-app-bar app color="#411F1F" dark>
      <v-toolbar-title class="text-h5">Movie Explorer</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {},
};
</script>
