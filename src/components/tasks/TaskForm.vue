<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
const taskStore = useTaskStore()
const newTask = ref('')
const handleSubmit = () => {
    if (newTask.value.length > 0)  {
        taskStore.addTask(
            {
                fakeid: Math.floor(Math.random() * 1000000),
                title: newTask.value,
                favorite:false
            }
        )
    }
}
</script>
<template>
    <div class="mb-4">
        <form class="flex flex-row gap-2" @submit.prevent="handleSubmit">
            <input 
                class="rounded-md px-4 py-2 v-96"
                type="text" 
                name="title" 
                id="title" 
                placeholder="Nome dell task"
                v-model="newTask"
                >
            <button class="p-2 bg-blue-500 text-white rounded-md">Add</button>    
        </form>
    </div>
</template>