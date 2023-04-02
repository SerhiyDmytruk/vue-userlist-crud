<template>
  <div id="app" ref="test">
    <TitlePage title-name="Phone list" />
    <router-view />
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TitlePage,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  created() {
    this.fetchData();
  },
};
</script>
