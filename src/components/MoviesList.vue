<template>
  <div>
    <b-container>
      <h3 class="list-title">IMDB Top 250</h3>
      <b-row>
        <template v-if="isExist">
          <b-col cols="3" v-for="(movie, key) in list" :key="key">
            <MovieItem :movie="movie"/>
          </b-col>
        </template>
        <template v-else>
          <div>Empty list</div>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MovieItem from "@/components/MovieItem";

export default {
  name: "MoviesList",
  components: {
    MovieItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>