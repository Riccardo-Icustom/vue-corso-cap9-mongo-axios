<script setup>
    defineProps(['id']);

</script>
<template>  
    <div>
        <h1 class="p-4 font-bold">Commenti relativi al task numero: {{id}}</h1>
        <ul>
            <li>Commento 1</li>
            <li>Commento 2</li>
            <li>Commento 3</li>
            <li>Commento 4</li>
            <li>Commento 5</li>
        </ul>
    </div>
</template>