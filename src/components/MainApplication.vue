<script setup>
import { onMounted } from 'vue';
import TopBarComponent from './TopBar.vue'
import NavigatorBarComponent from './NavigatorBar.vue'
import { useTaskStore } from '@/stores/taskStore'
const taskStore = useTaskStore();

onMounted(() => {
    taskStore.getTasks();
})

</script>
<template>
  <div class="p-4">
    <TopBarComponent />
    <NavigatorBarComponent />
    <router-view></router-view>
    
  </div>
</template>
<style scoped></style>