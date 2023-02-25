<template>
  <form class="container">
    <legend>Add new user</legend>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Name Surname"
      v-model="customer.name"
    />
    <input
      type="number"
      name="phone"
      id="phone"
      placeholder="123456789"
      v-model="customer.phone"
    />
    <button @click="addNewCustomer">Submit</button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "CreateUser",
  data() {
    return {
      customer: {},
    };
  },
  methods: {
    addNewCustomer(e) {
      e.preventDefault();

      axios
        .post(
          "https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database",
          this.customer
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
