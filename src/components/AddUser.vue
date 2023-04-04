<template>
  <div class="container mb-5">
    <form
      class="row justify-content-md-center flex-row flex-column"
      @submit="onSubmit"
    >
      <legend class="text-center">Add new user</legend>

      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          name="name"
          id="name"
          placeholder="Name Surname"
          v-model="user.name"
        />
      </div>

      <div class="mb-3">
        <input
          class="form-control"
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone number"
          v-model="user.phone"
        />
      </div>

      <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddUser",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit(e) {
      e.preventDefault();
      this.addUser(this.user);
    },
  },
};
</script>
