<script setup>
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon
} from "@heroicons/vue/24/solid";

const props = defineProps({
    currentPage: {type: Number, default: null},
    totalPages: {type: Number, default: null}
})

const emit = defineEmits(['prev', 'next']);

function prevPage() {
    emit('prev', props.currentPage)
}

function nextPage() {
    emit('next',props.currentPage)
}

</script>

<template>
    <ul class="flex items-center justify-center -space-x-px h-10 text-base ">
        <li>
            <button 
                @click="prevPage" 
                :disabled="currentPage === 1" 
                class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <ChevronDoubleLeftIcon class="w-5 h-5 rtl:rotate-180"/>
            </button>
        </li>
        <li>
            <span class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Page {{ currentPage }}</span>
        </li>
        
        <li>
            <button 
                @click="nextPage" 
                :disabled="currentPage === totalPages" 
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <ChevronDoubleRightIcon class="w-5 h-5 rtl:rotate-180"/>
            </button>
        </li>
    </ul>
</template>