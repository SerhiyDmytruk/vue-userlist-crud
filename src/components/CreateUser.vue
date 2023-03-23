<template>
  <div class="container mb-5">
    <form class="row justify-content-md-center flex-row flex-column">
      <legend class="text-center">Add new user</legend>

      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          name="name"
          id="name"
          placeholder="Name Surname"
          v-model="customer.name"
        />
      </div>

      <div class="mb-3">
        <input
          class="form-control"
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone number"
          v-model="customer.phone"
        />
      </div>

      <button @click="addNewCustomer" class="btn btn-success">Submit</button>
    </form>
  </div>
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
