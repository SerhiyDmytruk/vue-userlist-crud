<template>
  <div v-if="post" class="container">
    <a href="/" class="btn btn-outline-info mb-4">Back to list</a>

    <form class="row align-items-start">
      <div class="col-md-12 text-center">
        <img
          :src="post.avatar"
          class="rounded-circle mb-3"
          height="70px"
          :data-post-id="post.id"
          :alt="post.name"
        />
      </div>
      <div class="mb-1 col-md-6">
        <input
          class="form-control"
          type="text"
          name="name"
          id="name"
          placeholder="Name Surname"
          v-model="post.name"
        />
      </div>

      <div class="mb-1 col-md-6">
        <input
          class="form-control"
          type="number"
          name="phone"
          id="phone"
          placeholder="123456789"
          v-model="post.phone"
        />
      </div>
      <div class="col-md-12">
        <button @click="editCustomer" class="w-100 btn btn-info">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "EditUser",
  data() {
    return {
      customer: {},
    };
  },
  props: {
    post: {
      type: [Object, Boolean],
      required: true,
    },
  },
  methods: {
    editCustomer(e) {
      e.preventDefault();
      axios
        .put(
          `https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database/${this.$route.params.id}`,
          this.post
        )
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
