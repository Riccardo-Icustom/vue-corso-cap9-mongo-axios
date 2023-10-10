<script setup>
    defineProps(['id']);
</script>
<template>  
    <div>
        <h1 class="p-4 font-bold">Immagini relative al Task N°:{{ id }}</h1>
        <ul class="grid grid-cols-3 mx-8 gap-4">
            <li class="w-24 h-24 bg-blue-500"></li>
            <li class="w-24 h-24 bg-red-500"></li>
            <li class="w-24 h-24 bg-yellow-500"></li>
            <li class="w-24 h-24 bg-green-500"></li>
            <li class="w-24 h-24 bg-pink-500"></li>
            <li class="w-24 h-24 bg-gray-500"></li>
        </ul>
    </div>
</template>