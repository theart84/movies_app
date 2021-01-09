import Vue from "vue";
import Vuex from "vuex";
import movies from "@/store/modules/movies";
import loader from "@/store/modules/loader";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader
  }
});

export default store;
