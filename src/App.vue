<template>
  <div id="app" ref="app">
    <SearchUser />
    <AddUser />
    <PhoneGrid />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PhoneGrid from "@/components/PhoneGrid";
import AddUser from "@/components/AddUser";
import SearchUser from "@/components/SearchUser";

export default {
  name: "App",
  components: {
    PhoneGrid,
    AddUser,
    SearchUser,
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  created() {
    this.fetchUsers();
  },
};
</script>
