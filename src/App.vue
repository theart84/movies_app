<template>
  <div id="app">
    <PosterBG :poster="posterBg"/>
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
import PosterBG from "@/components/PosterBG";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBG
  },
  data: () => ({
    posterBg: ""
  }),
  computed: {
    ...mapGetters("movies", ["moviesList"])
  },
  methods: {
    onChangePoster(poster) {
      this.posterBg = poster;
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
