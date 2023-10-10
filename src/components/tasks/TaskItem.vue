<script setup>
import { useTaskStore } from '@/stores/taskStore'
import { useRouter } from 'vue-router'

const props = defineProps(
    {task: {type: Object} }
)
const taskStore = useTaskStore();
const router = useRouter();


    const handleDel = () => {
        if(confirm("Sei sicuro di voler eliminare questo task?")){
            taskStore.deleteTask(props.task.fakeid)
            //alert("Eliminato")
            }
    }
    const handleToggleFav = () => {
        console.log(`${props.task.favorite ? `Rimuovo dai`:`Aggiungo ai`}  preferiti ${props.task.fakeid}`)
        taskStore.toggleFavorite(props.task.fakeid)
    }

    const handleClick = () => {      
    
    router.push({name:'taskdetailcomments',params:{'id':props.task.fakeid}})
      
}

</script>
<template>
    <div class="flex flex-row gap-2 bg-green-100 hover:bg-green-300 m-4 p-4 rounded-md cursor-pointer" @click="handleClick">
        <div class="w-5/6">
            <h3>{{ task.title.substr(0,50) + '...' }}</h3>
            <p class="text-xs">(id:{{ task.fakeid }})</p>
        </div>
        <div class="w-1/6">
            <div class="flex flex-row gap-2 justify-end">
                <span @click.stop="handleDel" class="pi pi-trash p-2 bg-blue-500 rounded-md text-white hover:bg-blue-800 cursor-pointer"></span>
                <span title="aggiungi ai preferiti" v-if="!task.favorite" @click.stop="handleToggleFav" class="pi pi-heart p-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 cursor-pointer"></span>    
                <span title="rimuovi dai preferiti" v-if="task.favorite" @click.stop="handleToggleFav" class="pi pi-heart-fill p-2 bg-blue-50 text-red-500 rounded-md hover:bg-blue-800 cursor-pointer"></span>
            
                
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>