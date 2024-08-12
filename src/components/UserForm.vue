<script setup>
import { reactive } from "vue";

const props = defineProps({
    modelValue: {type: Object, default: null}
})

const emit = defineEmits(['save', 'cancel', 'update:modelValue'])

const errors = reactive({
  name: null,
  phone: null
});

const form = reactive({
    id: props.modelValue?.id,
    image: props.modelValue?.avatar,
    name: props.modelValue?.name,
    phone: props.modelValue?.phone
})

const validations = reactive({
    name: "required",
    phone: "required"
})

const validationRules = (rule) => {
    if(rule === 'required') return /^ *$/;

    return null;
}

function validate() {
  let valid = true;
  clearErrors();
  for (const [field, rule] of Object.entries(validations)) {
    const validation = validationRules(rule);
    if (validation) {
      if (validation.test(form[field] || "")) {
        errors[field] = `${field} is ${rule}`;
        valid = false;
      }
    }
  }

  return valid;
}
function cancelForm() {
  cleanUpForm();
  emit("cancel");
}

function saveUser() {
  if (validate()) {
    const data = {
      id: form.id || Number(Date.now()),
      name: form.name,
      phone: form.phone,
    };

    emit("update:modelValue", data);
  }
}


function cleanUpForm() {
  form.name = null;
  form.phone = null;
  clearErrors();
}

function clearErrors() {
  errors.name = null;
  errors.phone = null;
}

</script>

<template>

<div class="user-form-wrapper">
    <form class="space-y-6" @submit.prevent="saveUser">
        <input type="hidden" name="id" v-model="form.id" />
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Change user data</h5>

        <div>
            <img class="rounded-t-lg w-full" :src="form.image" :alt="form.name" />
        </div>

        <div>
            <label for="name" class="user-form-label">User Name</label>
            <input 
                type="name" 
                name="name" 
                id="name" 
                class="user-form-input" 
                v-model="form.name"
            />
            <span class="error-message">{{ errors.name }}</span>
        </div>
        <div>
            <label for="phone" class="user-form-label">User Phone</label>
            <input 
                type="name" 
                name="phone" 
                id="phone" 
                class="user-form-input" 
                v-model="form.phone"
            />
            <span class="error-message">{{ errors.phone }}</span>
        </div>
        
        <div class="flex justify-between">
            <button class="text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
                @click="cancelForm">
                Cancel
            </button>

            <button 
                type="submit" 
                class="user-form-submit">
                Save
            </button>
        </div>
    </form>
</div>
</template>