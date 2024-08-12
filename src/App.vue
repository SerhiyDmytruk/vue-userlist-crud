<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from "vue";
import UserItem from "./components/UserItem.vue";
import Pagination from "./components/Pagination.vue";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/vue/24/solid";


// User's data
const url = "https://63e4e7f3c04baebbcdaec89e.mockapi.io/Phone-database";
const users = ref(null);
const currentPage = ref(1);
const itemsPerPage = 10;

async function fetchUsers() {
    try {
        const response = await fetch(url, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
        if (response.ok) {
            const data = await response.json();
            users.value = data;
        } else {
            console.error('Response not OK', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
  }
}

onMounted(() => {
  fetchUsers();
});


// Pagination
const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return users.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(users.value.length / itemsPerPage);
})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Form
const UserForm = defineAsyncComponent(() => import("./components/UserForm.vue"))
const showUserForm = ref(false);
const currentUser = ref();

function hideUserForm() {
    showUserForm.value = false;
}

function editUser(userId){
    currentUser.value = users.value.find((user)=> user.id === userId);
    showUserForm.value = true;
}

function removeUser(userId){
    fetch(`${url}/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(users.value = users.value.filter(user => user.id !== userId))
    .catch((error) => console.error('Fetch error:', error))
}

const updateUser = async (userId, updatedUser) => {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser), // Оновлений об'єкт користувача у форматі JSON
    });
    if (response.ok) {
        const data = await response.json();          
        const index = users.value.findIndex(user => user.id === data.id);
        if (index !== -1) {
            users.value[index] = data;
        }

      return data;
    } else {
      console.error('Failed to update user:', response.status);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

function saveUser(data){
    updateUser(data.id, data)
    hideUserForm();
}

</script>

<template>

<div class="max-w-4xl m-auto">
    <div v-if="users">

        <UserForm 
            v-if="showUserForm"
            :modelValue="currentUser"
            @update:modelValue="saveUser"
            @cancel="hideUserForm"
        />

        <div v-if="!showUserForm">
            <div role="status" 
                class="user-list">
                <UserItem 
                    v-for="user in paginatedUsers"
                    :key="user.id"
                    :user="user"
                    @edit="editUser"
                    @remove="removeUser"
                />
            </div>
            
            <nav aria-label="Page navigation example" 
                class="mt-4"
                v-if="users.length > itemsPerPage">
                
                <Pagination
                    :currentPage="currentPage"
                    :totalPages="totalPages"
                    @prev="prevPage"
                    @next="nextPage"
                />
            </nav>
        </div>
    </div>
    <div v-else>
        <div role="status" class="user-list">
            <div class="user-list-item">
                <div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
        </div>
    </div>
</div>
</template>
