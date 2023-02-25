<template>
  <div class="container">
    <input
      type="text"
      v-model="searchNumber"
      placeholder="Search By Number"
      id="search-input"
    />

    <div class="row justify-content-md-center flex-row" v-if="usersData">
      <section
        v-for="(user, index) in usersData"
        :key="index"
        class="col-sm-8 card mb-2"
      >
        <div class="row align-items-center">
          <div class="col-sm-2">
            <img
              :src="user.avatar"
              class="rounded-circle"
              height="50px"
              :data-user-id="user.id"
              :alt="user.name"
            />
          </div>
          <div class="col-sm-6">
            <p class="mb-0">{{ user.name }}</p>
            <small>Phone:</small>{{ user.phone }}
          </div>
          <div class="col-sm-4 d-flex justify-content-end">
            <DeleteUser :data-id="user.id" />

            <router-link
              class="btn btn-primary ml-1"
              :to="{ path: 'item/' + user.id }"
            >
              <i class="bi bi-pencil">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  />
                </svg>
              </i>
              Edit
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DeleteUser from "./DeleteUser";

export default {
  data() {
    return {
      searchNumber: "",
    };
  },
  name: "PhoneGrid",
  components: {
    DeleteUser,
  },
  computed: {
    ...mapGetters({
      usersData: "block_data",
    }),
  },
  methods: {
    searchNumber() {
      // Process search input
      if (this.searchValue != "" && this.searchValue) {
        tempRecipes = tempRecipes.filter((item) => {
          return item.title
            .toUpperCase()
            .includes(this.searchValue.toUpperCase());
        });
      }
    },
    sortArrays(arrays) {
      return _.orderBy(arrays, "name", "asc");
    },
  },
};
</script>

<style scoped>
</style>
