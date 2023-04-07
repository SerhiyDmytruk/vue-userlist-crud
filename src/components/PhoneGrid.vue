<template>
  <div>
    <div class="container">
      <div
        class="row justify-content-md-center flex-row"
        v-if="!editMode && userList"
      >
        <section
          v-for="user in userList"
          :key="user.id"
          class="col-sm-8 card mb-2"
        >
          <div class="row align-items-center">
            <div class="col-sm-2">
              <img
                :src="user.avatar"
                class="rounded-circle"
                height="50px"
                :data-user-id="user.id"
                :alt="user.name"
              />
            </div>
            <div class="col-sm-6">
              <p class="mb-0">{{ user.name }}</p>
              <small>Phone:</small>{{ user.phone }}
            </div>
            <div class="col-sm-4 d-flex justify-content-end">
              <button
                class="btn btn-outline-danger ml-1"
                @click="deleteUser(user.id)"
              >
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

              <button
                class="btn btn-primary ml-1"
                v-on:click="editMode = !editMode"
                @click="editUser(user.id)"
              >
                <i class="bi bi-pencil">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                    />
                  </svg>
                </i>
                Edit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div v-if="editMode" class="container">
      <button
        v-on:click="editMode = !editMode"
        class="btn btn-outline-info mb-4"
      >
        Back to list
      </button>

      <form class="row align-items-start" @submit="onSubmit">
        <div class="col-md-12 text-center">
          <img
            :src="userData.avatar"
            class="rounded-circle mb-3"
            height="70px"
            :alt="userData.name"
          />
        </div>
        <div class="mb-1 col-md-6">
          <input
            class="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Name Surname"
            v-model="userData.name"
          />
        </div>

        <div class="mb-1 col-md-6">
          <input
            class="form-control"
            type="number"
            name="phone"
            id="phone"
            placeholder="123456789"
            v-model="userData.phone"
          />
        </div>
        <div class="col-md-12">
          <button class="w-100 btn btn-info">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      userData: {},
      editMode: false,
    };
  },
  name: "PhoneGrid",
  computed: {
    ...mapGetters(["userList", "getUserById"]),
  },
  methods: {
    ...mapActions(["fetchUsers", "deleteUser", "updateUser"]),
    editUser(id) {
      this.userData = this.getUserById(id);
      return this.userData;
    },
    onSubmit(e) {
      e.preventDefault();
      this.updateUser(this.userData);
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped></style>
