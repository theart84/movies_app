<template>
  <div>
    <b-container>
      <h3 class="list-title">{{ listTitle }}</h3>
      <b-row>
        <template v-if="isExist">
          <b-col cols="3" v-for="(movie, key) in list" :key="key">
            <MovieItem
              :movie="movie"
              @mouseover.native="onMouseOver(movie.Poster)"
              @removeItem="onRemoveItem"
            />
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
import { mapActions, mapGetters } from "vuex";

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
    ...mapGetters("movies", ["isSearch"]),
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    isExist() {
      return Boolean(Object.keys(this.list).length);
    }
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete ${title}?`
      );
      if (isConfirmed) {
        this.removeMovie(id);
      }
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #ffffff;
}
</style>
