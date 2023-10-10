<script setup>
import { ref } from 'vue'
import TaskItemComponent from './TaskItem.vue'
import ButtonComponent from '../UiButton.vue'
import UiLoader from '../UiLoader.vue'
import { useTaskStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia'
const taskStore = useTaskStore();

//Si potrebbe semplicemente creare una nuova costante
// con la proprietà tasks dell'oggetto nello store
//ATTENZIONE! Con questo sistema potresti avere dei problemi in caso di aggiornamento dello stato (actions)
//In quanto queste costanti sono "copie" dell'originale non riflettono in realtà 
//lo stato  modificato! (perdo la reattività)
/*
const tasks = taskStore.tasks
const name = taskStore.name
const totalCount = taskStore.totalCount
const favCount = taskStore.favCount
const favs = taskStore.favs
*/

//Destrutturo l'oggetto MANTENENDO la reattività delle variabili
//Vedi https://pinia.vuejs.org/core-concepts/#Destructuring-from-a-Store
const {tasks,name,loading, totalCount,favCount,favs}  = storeToRefs(taskStore);





const filter = ref('all');

</script>
<template>
    <div class="max-w-5xl mx-auto">
        <UiLoader v-if="loading"/>
        <template v-if="!loading">
            <div class="flex flex-row gap-4 my-4 justify-end ">
                <ButtonComponent  @click="filter='all'">Tutti i task</ButtonComponent>
                <ButtonComponent type="success"  @click="filter='favs'">Task preferiti</ButtonComponent>
            </div>        
            <template v-if="filter ==='all'">
                <p>Numero totale di tasks: {{ totalCount }}  |  Task di  <span class="pi pi-user"></span> {{ name }}</p>
                <TaskItemComponent v-for="t, index in tasks" 
                :key = "index"
                :task = "t"
                />         
            </template>
            <template v-if="filter ==='favs'">
                <p>numero di task preferiti: {{ favCount }}</p>
                <TaskItemComponent v-for="t, index in favs" 
                :key = "index"
                :task = "t"
                />
            </template>        
        </template>
        
    </div> 
</template>
<style scoped>

</style>