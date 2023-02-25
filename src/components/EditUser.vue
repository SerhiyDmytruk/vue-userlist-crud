<template>
  <div v-if="post">
    <a href="/">back to list</a>
    <img
      :src="post.avatar"
      class="rounded-circle"
      height="50px"
      :data-post-id="post.id"
      :alt="post.name"
    />

    <form class="container">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name Surname"
        v-model="post.name"
      />
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="123456789"
        v-model="post.phone"
      />
      <button @click="editCustomer">Submit</button>
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
        .then((response) => {
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
