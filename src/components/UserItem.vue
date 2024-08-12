<script setup>
import {
  PencilIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
    user: {type: Object, default: null}
})

const emit = defineEmits(['edit', 'remove'])

function editUser() {
  emit('edit', props.user.id)
}

function removeUser() {
  emit('remove', props.user.id)
}

</script>

<template>
  <div class="user-list-item" :data-user-id="user.id">
    <div class="w-96 flex items-center">
      <div class="rounded-full w-24">
        <img :src="user.avatar" :alt="user.name" class="w-10 h-10 rounded-full"/>
      </div>
      <div class="">{{ user.name }}</div>
    </div>
    <div class="">{{ user.phone }}</div>
    <div>
      <button class="rounded-full bg-gray-200 p-3 text-gray-800 hover:text-white hover:bg-indigo-500 mr-4"
            @click="editUser()">
        <PencilIcon class="w-4 h-4" />
      </button>
      <button class="rounded-full bg-gray-200 p-3 text-gray-800 hover:text-white hover:bg-red-500"
            @click="removeUser()">
        <TrashIcon class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>