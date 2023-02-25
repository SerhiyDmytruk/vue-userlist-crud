<template>
  <div>
    <EditUser :post="customer" />
  </div>
</template>

<script>
import EditUser from "@/components/EditUser";

export default {
  name: "PersonalUser",
  components: { EditUser },
  computed: {
    customer() {
      return this.$store.getters.getPostById(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
</style>
