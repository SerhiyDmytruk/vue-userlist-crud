<template>
  <div class="container mb-5">
    <form
      class="row justify-content-md-center flex-row flex-column"
      @submit="onSubmit"
    >
      <legend class="text-center">Search user</legend>

      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          name="name"
          placeholder="Enter user name"
          @input="emitValueOnChange"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchUser",
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapGetters(["getUserByName"]),
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
    },

    emitValueOnChange(e) {
      let value = e.target.value;

      this.getUserByName(value);
    },
  },
};
</script>
