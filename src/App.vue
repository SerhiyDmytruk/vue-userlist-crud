<template>
  <div id="app" ref="app">
    <SearchUser />
    <AddUser />
    <PhoneGrid />
    <Paginatiion 
    :total-pages="11"
    :total="113"
    :per-page="10"
    :current-page="currentPage"
    @pagechanged="onPageChange"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PhoneGrid from "@/components/PhoneGrid";
import AddUser from "@/components/AddUser";
import SearchUser from "@/components/SearchUser";
import Paginatiion from './components/Paginatiion.vue';

export default {
  name: "App",
  components: {
    PhoneGrid,
    AddUser,
    SearchUser,
    Paginatiion,
},
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  created() {
    this.fetchUsers();
  },
};
</script>
