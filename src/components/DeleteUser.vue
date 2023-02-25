<template>
  <button class="btn btn-outline-danger ml-1" @click="deleteUser">
    <i class="bi bi-trash2-fill">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash2"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"
        />
      </svg>
    </i>
    Delete
  </button>
</template>
<script>
import axios from "axios";

export default {
  name: "DeleteUser",
  data() {
    return {
      id: null,
    };
  },
  mounted: function () {
    this.id = this.$el.getAttribute("data-id");
  },
  methods: {
    deleteUser() {
      axios
        .delete(
          `https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database/${this.id}`
        )
        .catch((error) => {
          this.$router.push("/");
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
