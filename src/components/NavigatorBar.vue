<script setup>  
  import routes from '../routes'
  const baseClass = "p-2 rounded-md cursor-pointer"
  const classMenu = `${baseClass} bg-blue-500  hover:bg-blue-900`
  const classMenuSelected = `${baseClass} bg-purple-500 hover:bg-purple-900`
  
  const navRoutes = routes.filter(item => item.isInNavigation); 
  
</script>

<template>
      <div class="flex flex-row p-4 gap-4 font-bold text-white  bg-green-800 w-full mx-auto justify-center items-center rounded-md">
        <p>Current route name: {{ $route.name }} | </p>
        <router-link v-for="route in navRoutes" 
          :key="route.name"
          :to="{name: route.name}" 
          :class="$route.name === route.name ? classMenuSelected :  classMenu"
          > 
        {{ route.title }}
        </router-link>
        <router-link to="/tasks/1">Task numero 1</router-link>
        <router-link to="/tasks/2">Task numero 2</router-link>
    </div>
</template>
