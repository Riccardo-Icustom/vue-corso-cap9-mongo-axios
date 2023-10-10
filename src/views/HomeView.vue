<script setup>
import { useTaskStore } from '@/stores/taskStore'
const taskStore = useTaskStore();

const handleReset = () => {
  taskStore.$reset()
}
</script>

<template>
    <div class="max-w-5xl mx-auto p-8">
        <h1 class="text-2xl font-bold mx-auto text-center">Home Page</h1>
        <h2 class="text-xl font-bold mx-auto text-center text-green-600">Welcome to the Task Manager</h2>
    </div>
</template>