<template>
  <div id="app" ref="test">
    <AddUser />
    <PhoneGrid />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PhoneGrid from "@/components/PhoneGrid";
import AddUser from "@/components/AddUser";

export default {
  name: "App",
  components: {
    PhoneGrid,
    AddUser,
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  created() {
    this.fetchUsers();
  },
};
</script>
