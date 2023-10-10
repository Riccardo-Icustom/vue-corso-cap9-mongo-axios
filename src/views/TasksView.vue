<script setup>
import TaskListComponent from '../components/tasks/TaskList.vue'
import ButtonComponent from '../components/UiButton.vue'
import { useTaskStore } from '@/stores/taskStore'
const taskStore = useTaskStore();

const handleReset = () => {
  taskStore.$reset()
}
</script>
<template>
<div class="max-w-5xl mx-auto p-8">
        <h1 class="text-2xl font-bold mx-auto text-center">Tasks Page </h1>
        <TaskListComponent />
        <ButtonComponent class="mr-2" type="danger" @click="handleReset">Reset</ButtonComponent>

</div>
</template>
