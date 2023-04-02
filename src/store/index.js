import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
  },
  actions: {
    fetchData({ commit }) {
      axios
        .get("https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database")
        .then((response) => {
          commit("FETCH_DATA", response.data);
          return response.json().data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    FETCH_DATA(state, post) {
      state.users = post;
    },
  },
  getters: {
    block_data(state) {
      return state.users;
    },
    getPostById: (state) => (id) => {
      let results = state.users.find((item) => item.id === id);
      if (!id || !results) return false;

      return results;
    },
  },
});

export default store;
