<template>
  <div id="app">
    <MoviesList :list="moviesList" />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    MoviesList
  },
  computed: {
    ...mapGetters("movies", ["moviesList"])
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
