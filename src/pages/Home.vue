<template>
  <div>
    <CreateUser />
    <PhoneGrid />
  </div>
</template>

<script>
import PhoneGrid from "@/components/PhoneGrid";
import CreateUser from "@/components/CreateUser";

export default {
  name: "Home",
  components: {
    PhoneGrid,
    CreateUser,
  },
};
</script>

<style scoped>
</style>
