<script setup>
    import TaskFormComponent from './tasks/TaskForm.vue'
    import { useTaskStore } from '@/stores/taskStore'
    import { storeToRefs } from 'pinia'
    const taskStore = useTaskStore();
    const {loading}  = storeToRefs(taskStore)
    const VITE_API_URL = import.meta.env.VITE_API_URL 
</script>

<template>
    <div class="flex flex-col bg-green-300 w-full mx-auto justify-center items-center rounded-md">
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="45" height="45" />
        <p class="text-xl text-center my-4">Pinia store manager from {{ VITE_API_URL }}</p>
        <TaskFormComponent v-if="!loading && $route.name === 'tasks'"/>
    </div>
</template>