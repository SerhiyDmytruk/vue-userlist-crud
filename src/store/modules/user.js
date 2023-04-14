import axios from "axios";

const state = {
  users: [],
};
const getters = {
  userList: (state) => state.users,
  getUserById: (state) => (id) => {
    let results = state.users.find((item) => item.id === id);
    if (!id || !results) return false;

    return results;
  },
  getUserByName: (state) => (name) => {
    console.log(name, "getUserByName name");

    if (name !== "") {
      let results = state.users.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase());
      });

      return (state.users = results);
    }
  },
};
const actions = {
  async fetchUsers({ commit }) {
    axios
      .get("https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database")
      .then((response) => {
        commit("SET_USERS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async addUser({ commit }, user) {
    console.log(user);
    const response = await axios.post(
      "https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database",
      user
    );
    commit("NEW_USER", response.data);
  },
  async deleteUser({ commit }, id) {
    await axios.delete(
      `https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database/${id}`
    );

    commit("REMOVE_USER", id);
  },
  async updateUser({ commit }, updUser) {
    axios
      .put(
        `https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database/${updUser.id}`,
        updUser
      )
      .then((response) => {
        commit("UPDATE_USER", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
const mutations = {
  SET_USERS: (state, user) => (state.users = user),
  NEW_USER: (state, user) => state.users.unshift(user),
  REMOVE_USER: (state, id) =>
    (state.users = state.users.filter((user) => user.id !== id)),
  UPDATE_USER: (state, updUser) => {
    const index = state.users.findIndex((user) => user.id === updUser.id);
    if (index !== 1) {
      state.users.splice(index, 1, updUser);
    }
  },
};
const computed = {
  filteredResources: () => {
    if (this.searchQuery) {
      return this.userList.filter((item) => {
        return item.title.startsWith(this.searchQuery);
      });
    } else {
      return this.userList;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  computed,
};
